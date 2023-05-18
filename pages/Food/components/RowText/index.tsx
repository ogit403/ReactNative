import { View, Text } from 'react-native'
import React from 'react'

import styles from './style';

const RowText = ({ text }: { text: string }) => {
    return (
        <View style={ styles.row }>
            <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
            </View>
            <View style={ styles.bulletText }>
            <Text>{text}</Text>
            </View>
        </View>
    )
}

export default RowText