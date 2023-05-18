import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import styles from './style';
import { ItemFavorite } from '../../components';

const Favorite = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <ItemFavorite />
            <ItemFavorite heart />
            <ItemFavorite />
            <ItemFavorite />
            <ItemFavorite />
        </View>
    </ScrollView>
  )
}

export default Favorite