import { Button, Dialog, DialogTitle, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStore } from "../../../state/state";
import './createCampaign.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

function CreateCampaignComponent(props: Props) {

    const [open, updateOpen] = useState(false);
    const [isError, updateIsError] = useState(false);
    const { campaigns, addCampaign } = useStore(state => state);
    const [name, updateName] = useState('');
    const [creator, updateCreator] = useState('');

    useEffect(() => {
        updateOpen(props.isOpen);
    }, [props.isOpen])

    const createCampaign = () => {
        const isDuplicate = campaigns.find(camp => camp.name === name);
        if (!isDuplicate) {
            updateIsError(false);
            const date = new Date();
            const tempDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            addCampaign({
                id: -1,
                name,
                creator,
                createdAt: tempDate,
                lastModified: tempDate,
            })
            handleClose();
        } else {
            updateIsError(true);
        }

    }

    const handleClose = () => {
        updateName('');
        updateCreator('');
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
            <div className="create-dialog">
                <DialogTitle data-testid="title" id="simple-dialog-title">Create Campaign</DialogTitle>
                <div className="text-boxes">
                    <TextField data-testid="name" id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => updateName(e.target.value)} />
                    {isError && <span data-testid="error"  className="error-text">Campaign name already exists</span>}
                    <TextField data-testid="creator" id="outlined-basic" label="Creator" variant="outlined" value={creator} onChange={(e) => updateCreator(e.target.value)} />
                </div>
                <Button data-testid="create-button" disabled={!(name && creator)} variant="contained" color="primary" onClick={createCampaign}>Create</Button>
            </div>
        </Dialog >
    );
}

export default CreateCampaignComponent;