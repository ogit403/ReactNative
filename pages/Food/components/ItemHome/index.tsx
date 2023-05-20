import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';
import { CategoryType } from '../../interfaces';

const ItemHome = ({ item, onPress }: { item :CategoryType, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.wrapImage}>
            <Image style={styles.image} source={item.thumb} />
        </View>
        <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default ItemHome