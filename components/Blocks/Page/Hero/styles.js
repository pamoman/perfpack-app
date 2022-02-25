/* 
 * Styles
 */

const styles = {
    hero: theme => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: theme.layout.hero.height,
    }),
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
    },
    content: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: theme => ({
        pb: theme.spacing(4),
    }),
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "14rem",
    }
};

export default styles;