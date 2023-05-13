import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'

import styles from './style';

const Form = ({ handleAddTask }: { handleAddTask: (_value: string) => void }) => {
    const [task, setTask] = useState('');

    const handleAdd = async () => {
        if (!task) {
            alert('Vui lòng nhập tên!!!');
            return;
        }
        handleAddTask(task);
        setTask('');
        setTimeout(() => {
            Keyboard.dismiss();
        }, 0)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={10}
            style={styles.form}
        >
            <TextInput
                onChangeText={(text) => setTask(text)}
                value={task}
                placeholder='Your Task'
                style={styles.input}
            />
            <TouchableOpacity onPress={handleAdd}>
                <View style={styles.button}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form