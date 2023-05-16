import { View, Text } from 'react-native'
import React from 'react'

import styles from './style';
import Button from '../Button';
import { Data } from '../../interfaces';

interface Button {
  status: string;
}

const listButton: Button[] = [
  { status: 'like' },
  { status: 'dislike' },
  { status: 'love' }
]

const List = ({ data }: { data: Data }) => {
  return (
    <View style={styles.container}>
        <View style={styles.wrap}>
            {
              listButton.map((el: Button) => (
                <Button key={el.status} status={el.status} data={data} />
              ))
            }
        </View>
    </View>
  )
}

export default List