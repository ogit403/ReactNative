import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../contains/color';

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      wrapScore: {
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
      titleScore: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
      },
      score: {
        fontSize: 72,
        color: colors.colorText,
        fontWeight: 'bold',
        marginLeft: 36,
      },
      tryAgain: {
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.four,
        paddingHorizontal: 27,
        paddingVertical: 15,
        borderRadius: 20,
      },
      text: {
        marginLeft: 15,
        color: colors.one,
        fontWeight: 'bold',
        fontSize: 24,
      }
});

export default style;