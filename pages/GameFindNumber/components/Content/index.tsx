import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from './style';
import Item from '../Item';

interface ContentProps {
  items: number[];
  bg: {
    backgroundColor: string;
    color: string;
  }[];
  score: number;
  onChoice: (_value: number) => void;
}

const Content = ({ items, bg, score, onChoice }: ContentProps) => {

  return (
    <View style={styles.content}>
      {
        items.map((el: number, index: number) => (
          <Item onChoice={onChoice} score={score} value={el} key={el} bg={bg[index]} />
        ))
      }
    </View>
  )
}

export default Content