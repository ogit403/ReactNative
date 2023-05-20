import { View, Text, TouchableOpacity, Image, Button, Alert } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { COLORS } from '../../contains';
import { PRODUCTS } from '../../data';
import { ProductType } from '../../interfaces';
import useActionProduct from '../../hooks/useActionProduct';

const ItemFavorite = ({ heart = false, id, onPress }: { heart?: boolean, id: string, onPress: (_value: ProductType) => void }) => {
    const product = PRODUCTS.find((element: ProductType) => element.id === id);
    const { isFavoriteActive, handleAction, deleteAction } = useActionProduct(id);

    const handleDelete = () => {
        Alert.alert('Thông báo !', 'Bạn muốn xoá sản phẩm này ?', [
            {
                text: 'Huỷ',
                style: 'cancel',
            },
            {text: 'Đồng ý', onPress: () => deleteAction(!heart ? 'favorite' : 'seen')},
        ]);
    }

    return (
        product ?
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onPress(product)} style={styles.wrapContent}>
                <View style={styles.wrapImage}>
                    <Image style={styles.image} source={product.thumb} />
                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.text}>{product.title}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.wrapIcon}>
                {
                    heart && (
                        <TouchableOpacity onPress={() => handleAction('favorite')} style={styles.icon}>
                            <Ionicons name={`${isFavoriteActive ? 'heart' : 'heart-outline'}`} size={26} color={COLORS.icon} />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity onPress={handleDelete} style={styles.icon}>
                    <Ionicons name="trash" size={26} color={COLORS.icon} />
                </TouchableOpacity>
            </View>
        </View> : <></>
    )
}

export default ItemFavorite