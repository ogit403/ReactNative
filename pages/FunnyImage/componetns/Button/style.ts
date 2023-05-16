import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    wrap: {
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor : COLORS.shadowBox,
        shadowOffset : {
            width : 0,
            height : 4
        },
        shadowOpacity : 0.25,
        elevation : 4,
        shadowRadius : 20,
        borderColor: COLORS.number,
        borderWidth: 2,
    },
    text: {
        textAlign: 'center',
        color: COLORS.number,
        fontSize: 24,
        fontWeight: '600',
    },
    funny: {
        backgroundColor: COLORS.funny,
    },
    sad: {
        backgroundColor: COLORS.sad,
    },
    happy: {
        backgroundColor: COLORS.happy
    },
    active: {
        borderColor: COLORS.active,
        borderWidth: 2,
    }
});

export default styles;