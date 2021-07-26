import { Button } from "@material-ui/core";

interface Props {
    name: string;
    onClick: () => void;
}
function ButtonComponent(props: Props) {
    return (
        <Button onClick={props.onClick} variant="contained">{props.name}</Button>
    );
}

export default ButtonComponent;