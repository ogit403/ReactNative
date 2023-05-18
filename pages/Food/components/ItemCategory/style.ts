import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const height = Dimensions.get('window').height - 180;

const styles = StyleSheet.create({
    item: {
        height: height / 3,
    },
    wrapImage: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: 145,
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    wrapContent: {
        backgroundColor: COLORS.second,
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    wrapIcon: {
        flexDirection: 'row',
        marginTop: 10,
    }
});

export default styles;