import { Button, Dialog, DialogTitle, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStore } from "../../../state/state";
import { Campaign } from "../../../types/types";
import './editCampaign.scss';

interface Props {
    campaign: Campaign;
    isOpen: boolean;
    onClose: () => void;
}

function EditCampaignComponent(props: Props) {

    const [open, updateOpen] = useState(false);
    const [isError, updateIsError] = useState(false);
    const { updateCampaign, campaigns } = useStore(state => state);
    const [name, updateName] = useState(props.campaign.name);

    useEffect(() => {
        updateOpen(props.isOpen);
    }, [props.isOpen])

    useEffect(() => {
        updateName(props.campaign.name)
    }, [props.campaign])

    const editCampaign = () => {
        const isDuplicate = campaigns.find(camp => camp.name === name && camp.id !== props.campaign.id);
        if (!isDuplicate) {
            updateIsError(false);
            const date = new Date();
            const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            updateCampaign(props.campaign.id, {
                ...props.campaign,
                name,
                lastModified: tempDate,
            })
            handleClose();
        } else {
            updateIsError(true);
        }

    }

    const handleClose = () => {
        updateName('');
        updateIsError(false);
        updateOpen(false);
        props.onClose();
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="edit-dialog">
                <DialogTitle data-testid="title" id="simple-dialog-title">Edit Campaign</DialogTitle>
                <div className="text-boxes">
                    <TextField data-testid="name" id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => updateName(e.target.value)} />
                    {isError && <span data-testid="error" className="error-text">Campaign name already exists</span>}
                </div>
                <Button data-testid="update-button" variant="contained" color="primary" disabled={props.campaign.name === name} onClick={editCampaign}>Update</Button>
            </div>
        </Dialog >
    );
}

export default EditCampaignComponent;