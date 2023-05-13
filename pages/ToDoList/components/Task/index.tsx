import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

interface TaskProps {
    title: string;
    number: number;
    handleDeleteTask: () => void;
}

const Task = ({ title, number, handleDeleteTask }: TaskProps) => {
    const bgIndex = number % 2 === 0 ? styles.even : styles.odd;
    return (
        <TouchableOpacity onPress={handleDeleteTask}>
            <View style={styles.item}>
                <View style={[styles.left, bgIndex]}>
                    <Text style={styles.number}>{`${('0' + number).slice(-2)}`}</Text>
                </View>
                <Text style={styles.content}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task