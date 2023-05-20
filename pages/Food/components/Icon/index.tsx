import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
import { COLORS } from '../../contains';

interface IconProps {
  seen?: boolean;
  value?: number;
  isFavorite?: boolean;
  isView?: boolean;
}

const Icon = ({
    seen = false, value = 0, isFavorite = false, isView = false,
}: IconProps) => {

  const renderNameHeart = () => {
    return isFavorite ? 'heart' : 'heart-outline'
  }

  const renderNameView = () => {
    return isView ? 'eye' : 'eye-outline'
  }

  const renderValue = () => {
    if (seen) {
      return isView ? value + 1 : value;
    } else {
      return isFavorite ? value + 1 : value;
    }
  }

  return (
    <View style={styles.icon}>
        <Ionicons name={seen ? renderNameView() : renderNameHeart()} size={26} color={COLORS.icon} />
        { value && <Text style={styles.text}>{renderValue()}</Text> }
    </View>
  )
}

export default Icon