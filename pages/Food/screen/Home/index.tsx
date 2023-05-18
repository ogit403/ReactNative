import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import styles from './style';
import ItemHome from '../../components/ItemHome';

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
                <ItemHome />
            </View>
        </ScrollView>
    )
}

export default Home