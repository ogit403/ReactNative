import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../contains/color';

const windowWidth = Dimensions.get('window').width - 50;
const windowHeight = Dimensions.get('window').height - 130;

const style = StyleSheet.create({
    wrap: {
        width: windowWidth / 5,
        height: windowHeight / 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'pink',
        borderRadius: 99999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight : 'bold',
        fontSize : 24,
        paddingHorizontal : 13,
        paddingVertical : 13,
        color : colors.background
    }
});

export default style;