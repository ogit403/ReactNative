import { View, Text, Image, TouchableOpacity, ImageURISource } from 'react-native'
import React, { useMemo } from 'react'

import styles from './style';
import { IMAGES } from '../../contains';
import { useDispatch, useSelector } from 'react-redux';
import { ItemType, listActions } from '../../store/slice/list.slice';
import { Data } from '../../interfaces';

const images: { [key: string]: { image: ImageURISource, style: { backgroundColor: string } } } = {
  like: {
    image: IMAGES.funnyIcon,
    style: styles.funny,
  },
  love: {
    image: IMAGES.happyIcon,
    style: styles.happy,
  },
  dislike: {
    image: IMAGES.sadIcon,
    style: styles.sad
  },
}

const Button = ({ status, data }: { status: 'like' | 'dislike' | 'love' ; data: Data }) => {
  const dispatch = useDispatch();
  const { items }: { items: ItemType[] } = useSelector((state: any) => state.list);
  const active = items.find((el: ItemType) => el.id === data.id)?.status === status

  const dataStyle = images[status];

  const handleChange = () => {
    if (active) {
      dispatch(listActions.removeItem(data.id))
    } else {
      dispatch(listActions.addItem({
        id: data.id,
        status
      }))
    }
  }

  return (
    <TouchableOpacity onPress={handleChange} style={[styles.wrap, dataStyle.style, active ? styles.active : {}]}>
        <Image source={dataStyle.image} />
        <Text style={styles.text}>{active ? data[status] + 1 : data[status]}</Text>
    </TouchableOpacity>
  )
}

export default Button