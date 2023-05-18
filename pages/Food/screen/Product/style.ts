import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,

    },
    wrapImage: {
        position: 'relative',
        flex: 1,
        borderRadius: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 0,
    },
    iconLeft: {
        width: width / 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: COLORS.second,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopRightRadius: 25,
        alignItems: 'center',
    },
    iconRight: {
        width: width / 4,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.second,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 25,
        alignItems: 'center',
    },
    wrapContent: {
        flex: 3,
        paddingHorizontal: 20,
        marginTop: 24,
    },
    content: {  

    },
    wrapIngredients: {
        marginTop: 30,
        alignItems: 'center'
    },
    wrapTextIngredients: {
        backgroundColor: COLORS.second,
        width: width / 2.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    textIngredients: {
        textAlign: 'center',
        color: COLORS.title,
        fontWeight: '600',
        fontSize: 16,
    },
    ingredients: {
        backgroundColor: COLORS.second,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
});

export default styles;