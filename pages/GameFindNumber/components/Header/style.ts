import { Platform, StyleSheet } from 'react-native';
import colors from '../../contains/color';

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 25,
        paddingVertical: (Platform.OS === 'ios') ? 0 : 23,
        flexDirection: 'row',
        marginBottom: 40,
    },
    money: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    clock: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: colors.one,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});

export default style;