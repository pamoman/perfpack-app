/*
 * Content Block - Product
 */

import defaultSettings from './settings';
import styles from './styles';

const Component = ({ userSettings = {}}) => {
    return (
        <>
        </>
    )
};

const Product = (data) => {
    const { settings: productSettings, ...product } = data;

    const props = {
        ...product,
        userSettings: productSettings
    };

    return (
        <Component {...props} />
    )
};

export default Product;