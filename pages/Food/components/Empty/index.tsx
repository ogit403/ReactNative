import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'

const Empty = () => {
  return (
    <View>
      <Text style={styles.text}>Hiện tại không có sản phẩm!</Text>
    </View>
  )
}

export default Empty