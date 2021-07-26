
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import ButtonComponent from "../../common/button/button";
import CreateCampaignComponent from "../createCampaign/createCampaign";
import './header.scss';

function HeaderComponent() {
    const [openModal, updateOpenModal] = useState(false);
    function createCampaign() {
        updateOpenModal(true);
    }
    return (
        <Fragment>
            <AppBar>
                <Toolbar className="toolbar">
                    <Typography variant="h6" className="title">
                        Manage Campaigns
                    </Typography>
                    <ButtonComponent name="Create Campaign" onClick={createCampaign} />
                </Toolbar>
            </AppBar>
            <CreateCampaignComponent isOpen={openModal} onClose={() => updateOpenModal(false)} />
        </Fragment>
    );
}
export default HeaderComponent;