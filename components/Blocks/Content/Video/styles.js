/* 
 * Styles
 */

const styles = {
    videoContainer: {
        backgroundColor: "#000",
        position: "relative",
        pt: "56.25%",
        "& .react-player": {
            position: "absolute",
            top: 0,
            left: 0
        }
    },
    videoCaption: theme => ({
        backgroundColor: "background.dark",
        ...theme.palette.figcaption.props
    })
};

export default styles;