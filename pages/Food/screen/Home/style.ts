import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        paddingHorizontal : 15,
        paddingTop : 24,
        backgroundColor : COLORS.background
    },
});

export default styles;