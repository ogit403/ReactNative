import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { COLORS } from '../../contains';

const ItemFavorite = ({ heart = false }: { heart?: boolean }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity style={styles.wrapContent}>
                <View style={styles.wrapImage}>
                    <Image style={styles.image} source={require('../../data/images/wrapper.png')} />
                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.text}>Cillum tempor aute sint eli. tempor</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.wrapIcon}>
                {
                    heart && (
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="heart" size={26} color={COLORS.icon} />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="trash" size={26} color={COLORS.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemFavorite