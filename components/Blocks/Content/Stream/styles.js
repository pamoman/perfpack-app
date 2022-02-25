/* 
 * Styles
 */

const styles = {
    streamContainer: {
        backgroundColor: "#000",
        position: "relative",
        pt: "56.25%",
        "& .react-player": {
            position: "absolute",
            top: 0,
            left: 0
        }
    },
    streamCaption: theme => ({
        backgroundColor: "background.dark",
        ...theme.palette.figcaption.props
    })
};

export default styles;