import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

import styles from './style';
import { IMAGES } from '../../contains';
import { Data } from '../../interfaces';
import GestureRecognizer from 'react-native-swipe-gestures';

interface HeaderProps {
  data: Data;
  current: number;
  setCurrent: (_value: number) => void;
  length: number;
}

const Header = ({ data, current, setCurrent, length }: HeaderProps) => {

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  const nextImage = () => {
    const countNext = current + 1 >= length ? 0 : current + 1;
    setCurrent(countNext);
  }

  const prevImage = () => {
    const countPrev = current - 1 < 0 ? length - 1 : current - 1;
    setCurrent(countPrev);
  }

  const onSwipe = (direction: string) => {
    if (['SWIPE_DOWN', 'SWIPE_LEFT'].includes(direction)) {
      prevImage();
    } else {
      nextImage();
    }

  }

  return (
    <GestureRecognizer
        onSwipe={(direction, _) => onSwipe(direction)}
        config={config}
        style={styles.wrapper}
        >
          <Text style={styles.header}>{data.name}</Text>
          <View style={styles.wrapImage}>
            <Image
                source={data.image}
                style={styles.image}
            />
          </View>
      </GestureRecognizer>
  )
}

export default Header