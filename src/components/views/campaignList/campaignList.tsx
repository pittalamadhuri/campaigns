import { useState } from "react";
import { useStore } from "../../../state/state";
import { Campaign } from "../../../types/types";
import CardComponent from "../../common/card/card";
import EditCampaignComponent from "../editCampaign/editCampaign";
import './campaignList.scss';

function CampaignList() {
    const { campaigns, deleteCampaign } = useStore(state => state);
    const [editCampaign, updateEditCampaign] = useState({} as Campaign);
    const [isOpen, updateIsOpen] = useState(false);
    function handleClick(campaign: Campaign) {
        updateIsOpen(true);
        updateEditCampaign(campaign);
    }
    function onEditClose() {
        updateIsOpen(false);
        updateEditCampaign({} as Campaign);
    }


    return (
        <div className="campaign-list">
            {campaigns.map(campaign =>
                <CardComponent key={campaign.name} campaign={campaign} onEditHandler={handleClick} onDeleteHandler={() => deleteCampaign(campaign)} />
            )}
            <EditCampaignComponent isOpen={isOpen} campaign={editCampaign} onClose={onEditClose} />
        </div>
    );
}

export default CampaignList;