import {makeStyles, withStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
    },

    delete: {
        color: "#95a5a6",
    },

    edit: {
        color: "#95a5a6",
    },

    text: completed => ({
        textDecoration: completed ? "line-through" : "none",
    }),

}));


export const GrayCheckBox = withStyles({
    root: {
        color: "#95a5a6",
        '&$checked': {
            color: "#95a5a6",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

