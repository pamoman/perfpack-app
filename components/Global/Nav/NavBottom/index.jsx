/*
 * NavBottom
 */

import { Link as PamoLink } from '@components/Shared';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import utils from '@utils';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const PamoNavBottom = ({ links = [], ...props }) => {
    return (
        <BottomNavigation sx={styles.bottomNav} {...props}>
            {links.map((link, i) => {
                const { path, label, icon } = link;
                const { type, name: IconName } = icon || {};
                const iconType = utils.getIconType(type);

                return (
                    <BottomNavigationAction
                        key={`nav-bottom-link-${i}`}
                        className={isActive(path)}
                        sx={styles.bottomNav.link}
                        component={PamoLink}
                        href={path}
                        passHref
                        label={label}
                        icon={<FontAwesomeIcon icon={[iconType, IconName || "memo"]} size="lg" />}
                    />
                )
            })}
        </BottomNavigation>
)};

export default PamoNavBottom;