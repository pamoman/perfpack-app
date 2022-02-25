/*
 * NavList
 */

import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, IconButton, Drawer, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const NavList = ({ key, link, sub = false }) => {
    const { node = "", path = "", label = node, children = [] } = link;

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List key={key} component="div" disablePadding>
            <ListItemButton sx={() => styles.navList.collapsed(sub)} disabled={!path && true}>
                {path ?
                    <NextLink
                        href={path}
                        passHref
                    >
                        <Button>
                            <NavListItem path={path} label={label} />
                        </Button>
                    </NextLink>

                    :

                    <NavListItem path={path} label={label} />
                }

                {children && children.length > 0 &&
                    <>
                        {open
                            ? <ExpandLess sx={styles.navList.link.icon} onClick={handleClick} />
                            : <ExpandMore sx={styles.navList.link.icon} onClick={handleClick} />
                        }
                    </>
                }
            </ListItemButton>

            {children && children.length > 0 && (
                children.map((child, i) => (
                    <NavListCollapsed key={`nav-sub-drawer-${i}`} open={open}>
                        <NavList link={child} sub={true} />
                    </NavListCollapsed>
                ))
            )}
        </List>
    )
};

const NavListCollapsed = ({ key, open, children }) => {
    return (
        <Collapse key={key} in={open} timeout="auto" unmountOnExit>
            {children}
        </Collapse>
    )
};

const NavListItem = ({ path, label }) => {
    const active = isActive(path);

    return (
        <>
            <ListItemIcon>
                <DescriptionIcon className={active} sx={styles.navList.link.icon} />
            </ListItemIcon>

            <ListItemText className={active} sx={styles.navList.link.text}>
                {label}
            </ListItemText>
        </>
    )
};

const PamoNavDrawer = ({ links = [], open, toggleOpen, ...props }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleOpen(false)}
            onOpen={toggleOpen(true)}
        >
            <Box sx={styles.drawer}>
                <IconButton
                    sx={styles.drawer.icon}
                    onClick={toggleOpen(false)}
                >
                    <CloseIcon />
                </IconButton>

                <Divider sx={styles.drawer.divider} />

                <Box sx={styles.navList} {...props}>
                    {links.map((link, i) => {
                        return (
                            <NavList key={`nav-drawer-${i}`} link={link} />
                        )
                    })}
                </Box>
            </Box>
        </Drawer>
    );
};

export default PamoNavDrawer;