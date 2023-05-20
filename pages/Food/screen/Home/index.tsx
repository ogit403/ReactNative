import { View, Text, ScrollView, FlatList, } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './style';
import ItemHome from '../../components/ItemHome';
import { RootStackParamList } from '../../navigation/Home';
import { CATEGORIES } from '../../data';
import { CategoryType } from '../../interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const Home = ({ navigation }: Props) => {

    const onPress = (item: CategoryType) => {
        navigation.push('CategoryScreen', {
            id: item.id,
            name: item.title,
        })
    }
    
    const renderItem = ({item}: { item: CategoryType }) => {
        return <ItemHome onPress={() => onPress(item)} item={item} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item: CategoryType) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default Home