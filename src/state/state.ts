import create from "zustand";
import { findMaxID } from "../helpers/helpers";
import { Campaign } from "../types/types";

export type State = {
    initCampaigns: (campaigns: Campaign[]) => void;
    campaigns: Campaign[];
    addCampaign: (campaign: Campaign) => void;
    updateCampaign: (id: number, campaign: Campaign) => void;
    deleteCampaign: (campaign: Campaign) => void;
};

export const useStore = create<State>(set => ({
    campaigns: [],
    addCampaign: (campaign: Campaign) => set(state => {
        campaign.id = findMaxID(state.campaigns) + 1;
        return {
            ...state,
            campaigns: [...state.campaigns, campaign],
        }
    }),
    initCampaigns: (campaigns: Campaign[]) => set(state => ({ ...state, campaigns })),
    updateCampaign: (id: number, campaign: Campaign) => set(state => {
        var newCampaigns = state.campaigns.map(camp => {
            if (camp.id === id) {
                const date = new Date();
                const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                return {
                    ...camp,
                    name: campaign.name,
                    lastModified: tempDate
                }
            } else {
                return camp;
            }
        });
        return {
            ...state,
            campaigns: newCampaigns
        }
    }),
    deleteCampaign: (campaign: Campaign) => set(state => ({
        campaigns: state.campaigns.filter((camp) => {
            return camp.id !== campaign.id
        })
    }))
}));