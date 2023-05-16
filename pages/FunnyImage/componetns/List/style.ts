import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    wrap: {
        paddingHorizontal: 21,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 100,
    }
});

export default styles;