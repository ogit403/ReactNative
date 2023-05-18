import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
import { COLORS } from '../../contains';

const Icon = ({ seen = false, value = 0 }: { seen?: boolean, value?: number }) => {
  return (
    <View style={styles.wrap}>
        <View style={styles.icon}>
            <Ionicons name={seen ? 'eye' : 'heart'} size={26} color={COLORS.icon} />
            { value && <Text style={styles.text}>{value}</Text> }
        </View>
    </View>
  )
}

export default Icon