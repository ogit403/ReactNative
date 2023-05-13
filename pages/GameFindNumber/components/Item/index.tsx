import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

const Item = () => {
    return (
        <TouchableOpacity style={styles.wrap}>
            <View style={styles.item}>
                <Text style={styles.text}>01</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item