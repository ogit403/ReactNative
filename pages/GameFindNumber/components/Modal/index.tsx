import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import styles from './styles';
import colors from '../../contains/color';

const ModalEndGame = () => {
  return (
    <View style={styles.centeredView}>
      <Modal
        isVisible={false}
        hasBackdrop
        backdropColor={colors.backdrop}
        backdropOpacity={0.7}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Sorry, you failed</Text>
            <View style={styles.wrapScore}>
              <Text style={styles.titleScore}>Your Score:</Text>
              <Text style={styles.score}>20</Text>
            </View>
            <TouchableOpacity style={styles.tryAgain}>
            <FontAwesome name="recycle" size={40} color={colors.one} />
              <Text style={styles.text}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalEndGame;