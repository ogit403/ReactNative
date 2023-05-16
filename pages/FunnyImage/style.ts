import { StyleSheet } from 'react-native';
import { COLORS } from './contains';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        backgroundColor: COLORS.background,
        position: 'absolute',
        height: '50%',
        top: 0,
        left: 0,
        right: 0,
    },
});

export default styles;