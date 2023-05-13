import { StyleSheet } from "react-native";

import color from '../../contains/index';

const styles = StyleSheet.create({
    item: {
        backgroundColor: color.white,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 8,
    },
    left: {
        width: 44,
        height: 44,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    odd: {
        backgroundColor: color.primary,
    },
    even: {
        backgroundColor: color.secondary
    },
    number: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
    },
    content: {
        width: '80%',
        marginLeft: 20,
        fontSize: 16,
    }
})

export default styles;
