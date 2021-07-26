import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Campaign } from "../../../types/types";
import './card.scss'
import CreateIcon from '@material-ui/icons/Create';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

interface Props {
    campaign: Campaign
    onEditHandler: (campaign: Campaign) => void;
    onDeleteHandler: (campaign: Campaign) => void;
}

function CardComponent(props: Props) {
    return (
        <Card className="card" variant="outlined" key={props.campaign.name}>
            <CardContent className="content">
                <div className="card-head">
                    <Typography variant="h5" component="h2">
                        {props.campaign.name}
                    </Typography>
                    <div className="icons">
                        <div className="icon">
                            <CreateIcon onClick={() => props.onEditHandler(props.campaign)}></CreateIcon>
                        </div>
                        <div className="icon">
                            <DeleteSharpIcon onClick={() => props.onDeleteHandler(props.campaign)}></DeleteSharpIcon>
                        </div>
                    </div>
                </div>
                <div className="secondary-content">
                    <Typography className="title" color="textSecondary" gutterBottom>
                        creator: {props.campaign.creator}
                    </Typography>
                    <div className="dates">
                        <Typography className="pos" color="textSecondary">
                            created on: {props.campaign.createdAt}
                        </Typography>
                        <Typography className="pos" color="textSecondary">
                            last modified on: {props.campaign.lastModified}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardComponent;