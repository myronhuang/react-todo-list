import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#3498db",
        color: 'white',
        padding: theme.spacing(5, 4),
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
    },

    heading: {
        fontWeight: "900",
        marginBottom: "10px",
    },

    subheading: {
        fontSize: "16px",
    }

}));

export default useStyles;