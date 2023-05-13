import { StyleSheet } from "react-native";

import color from '../../contains/index';

const styles = StyleSheet.create({
    form: {
        bottom: 50,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    input: {
        width: '85%',
        backgroundColor: color.white,
        height: 40,
        borderRadius: 99999,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: color.primary,
        justifyContent: 'center',
        borderRadius: 99999,
        marginLeft: 20,
    },
    icon: {
        color: color.white,
        fontSize: 24,
    }
});

export default styles;
