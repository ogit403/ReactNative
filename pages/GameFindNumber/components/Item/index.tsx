import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

interface ItemProps {
    bg: {
        backgroundColor: string;
        color: string;
    };
    value: number;
    onChoice: (_value: number) => void;
    score: number;
}

const Item = ({ bg, value, onChoice, score }: ItemProps) => {
    const active = value <= score ? styles.active : {};
    const activeText = value <= score ? styles.activeText : {};

    return (
        <TouchableOpacity style={styles.wrap} onPress={() => onChoice(value)}>
            <View style={[styles.item, bg, active]}>
                <Text style={[styles.text, activeText]}>{ value < 10 ? `0${value}` : value }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item