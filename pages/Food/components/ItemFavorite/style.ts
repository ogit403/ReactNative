import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    wrapContent: {
        width: '85%'
    },
    wrapImage: {
        width: '100%',
    },
    image: {
        width: '100%',
        resizeMode: 'cover'
    },
    wrapIcon: {
        width: '15%',
    },
    icon: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        backgroundColor: COLORS.second,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    wrapText: {
        backgroundColor: COLORS.second,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        color: COLORS.primary,
        fontWeight: '600',
        textAlign: 'center',
    }
});

export default styles;