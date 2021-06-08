import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface VideoListItemProps {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        views: number;
        duration: string;
        videoUrl: string;
        user: {
            name: string;
            image: string;
        }
    }
}
const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;
    const navigation = useNavigation();

    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;

    let viewsString = video.views.toString();
    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'm'
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k'
    }

    //navigation page
    const openVideoPage = () => {
        navigation.navigate("VideoScreen",{id:video.id});


    }



    return (

        <Pressable onPress={openVideoPage} style={styles.videoCard}>
            {/* Image  */}
            <View>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: video.thumbnail }}
                />
                <View style={styles.timerStyle}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''} {seconds}</Text>

                </View>

            </View>


            {/* Title row */}
            <View style={styles.titleRow}>
                {/* avatar */}

                <Image
                    style={styles.avatar}
                    source={{ uri: video.user.image }}
                />

                {/* Middle container:title,subtitle,etc */}
                <View style={styles.middleStyle}>
                    <Text style={styles.middleStyleText}>{video.title}</Text>
                    <Text style={styles.middleStyleSubTitle}>{video.user.name} {viewsString} {video.createdAt}</Text>

                </View>
                {/* Menu icon */}
                <Entypo style={{ margin: 3 }} name="dots-three-vertical" size={16} color="white" />

            </View>

        </Pressable>


    )

}


export default VideoListItem;
