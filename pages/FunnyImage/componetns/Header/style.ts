import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    wrapper: {
        flex: 4,
        flexDirection: 'column',
        paddingHorizontal: 21,
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,   
    },
    wrapImage: {
        width : '100%',
        height : '100%',
        shadowColor : COLORS.shadowBox,
        shadowOffset : {
            width : 0,
            height : 4
        },
        shadowOpacity : 0.25,
        elevation : 4,
        shadowRadius : 20,
        borderRadius : 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius : 20
    }
});

export default styles;