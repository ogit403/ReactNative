import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
    item: {
        width: width / 2,
        paddingHorizontal: 10,
        marginBottom: 24,
    },
    wrapImage: {
        height: 120,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    text: {
        color: COLORS.primary,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 12,
        fontWeight: '600',

    },
});

export default styles;