/* 
 * Styles
 */

const styles = {
    headerContainer: (theme, layout) => {
        const style = {
            p: 2,
            backgroundColor: theme.palette.background.dark,
            color: theme.palette.primary.main
        };

        if (layout.hero) {
            return {
                ...style, ...{
                    backgroundColor: "inherit",
                    height: theme.layout.hero.height,
                }
            }
        }

        return style;
    },
    header: (theme, layout) => {
        const style = {
            height: theme.layout.header.height + "px",
            backgroundColor: "inherit",
        }

        if (layout.hero) {
            return {
                ...style, ...{
                    borderBottom: "none",
                    position: "relative",
                    zIndex: 999
                }
            }
        }

        return style;
    },
    toolbar: {},
    menuIcon: {
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    logoDesktop: {
        alignItems: "center",
        display: {
            xs: 'none',
            md: 'flex'
        },
        ml: 2,
        mr: 6,
    },
    logoMobile: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    logo: {
        display: 'flex',
        alignItems: "center",
    },
    rightIcons: {
        display: "flex",
    },
};

export default styles;