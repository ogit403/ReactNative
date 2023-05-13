import { StyleSheet } from "react-native";

import color from '../../contains/index';

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        color: color.text,
        fontSize: 24,
        fontWeight: '600',
    },
    items: {
        marginTop: 20,
    },
    empty: {
        textAlign: 'center'
    }
});

export default styles;
