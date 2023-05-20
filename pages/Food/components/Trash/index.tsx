import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains'
import { useDispatch } from 'react-redux';
import useActionProduct from '../../hooks/useActionProduct';

const TrashAll = ({ type, data }: { type: 'favorite' | 'seen', data: string[] }) => {
    const { deleteAllAction } = useActionProduct('')

    const onPress = () => {
        if (data.length) {
            Alert.alert('Thông báo !', 'Bạn muốn xoá hết tất cả sản phẩm ?', [
                {
                    text: 'Huỷ',
                    style: 'cancel',
                },
                {text: 'Đồng ý', onPress: () => deleteAllAction(type)},
            ]);
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons name="trash" size={26} color={COLORS.second} />
        </TouchableOpacity>
    )
}

export default TrashAll