import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

import color from './contains/index';
import Listing from './components/Listing';
import Form from './components/Form';

const ToDoList = () => {
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = (value: string) => {
        setTaskList([...taskList, value]);
    }

    const handleDeleteTask = (index: number) => {
        Alert.alert('Thông báo !!!', 'Bạn có chắc chắn muốn xoá ?', [
        {
            text: 'Huỷ',
            onPress: () => {},
            style: 'cancel',
        },
        {text: 'Có', onPress: () => {
            const newTaskList = [...taskList];
            newTaskList.splice(index, 1);
            setTaskList(newTaskList);
        }},
        ]);
    }

    return (
        <View style={styles.container}>
            <Listing taskList={taskList} handleDeleteTask={handleDeleteTask} />
            <Form handleAddTask={handleAddTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    }
})

export default ToDoList