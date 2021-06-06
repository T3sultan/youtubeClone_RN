import React from 'react';
import { Text, View, StyleSheet, Image,ScrollView,FlatList } from 'react-native';
import VideoListItem from './VideoListItem';
import videos from '../../assets/data/videos.json';

const HomeScreen = () => {

    return (

        <View>
            <FlatList
              data={videos}
              renderItem={({item})=> <VideoListItem video={item}/>}
            />
        </View>

    )

}
const styles = StyleSheet.create({


})

export default HomeScreen;
