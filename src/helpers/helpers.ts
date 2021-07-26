import { Campaign } from "../types/types";

export function findMaxID(campaigns: Campaign[]) {
    var max = 0;
    campaigns.forEach((campaign) => {
        max = campaign.id > max ? campaign.id : max
    });
    return max;
}