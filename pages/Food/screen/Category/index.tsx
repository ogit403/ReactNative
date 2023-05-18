import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import styles from './style';
import { ItemCategory } from '../../components';

const Category = () => {
  return (
    <ScrollView style={styles.container}>
        <View>
            <ItemCategory />
            <ItemCategory />
            <ItemCategory />
            <ItemCategory />
            <ItemCategory />
            <ItemCategory />
        </View>
    </ScrollView>
  )
}

export default Category