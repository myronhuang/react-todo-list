import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: 'flex',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#ecf0f1',
        '& input': {
            padding: "10px",
        }

    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    iconButton: {
        padding: 10,
        color: "#95a5a6",
    },
}));

export default useStyles;