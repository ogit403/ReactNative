import { View, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Header, List } from './componetns'

import styles from './style';
import fullData from './data'

const FunnyImage = () => {
  const [current, setCurrent] = useState(0);
  const data = fullData[current];

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
          <View style={styles.background} />
          <Header length={fullData.length} data={data} current={current} setCurrent={setCurrent} />
          <List data={data} />
      </SafeAreaView>
    </>
  )
}

export default FunnyImage