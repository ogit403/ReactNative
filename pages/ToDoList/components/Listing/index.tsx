import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import styles from './style';
import Task from '../Task';

interface ListingProps {
    taskList: string[];
    handleDeleteTask: (_value: number) => void;
}

const Listing = ({ taskList, handleDeleteTask }: ListingProps) => {
    return (
    <View style={styles.listing}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
            {
                taskList.map((el: string, index: number) => (
                    <Task key={`${el}${Math.random() * 100}`} handleDeleteTask={() => handleDeleteTask(index)} title={el} number={index + 1} />
                ))
            }
            {
                taskList.length === 0 && <Text style={styles.empty}>Vui lòng tạo thêm công việc</Text>
            }
        </ScrollView>
    </View>
    )
}

export default Listing