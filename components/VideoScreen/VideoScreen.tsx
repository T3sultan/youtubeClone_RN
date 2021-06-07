import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import video from '../../assets/data/video.json'
import styles from './styles';
import { AntDesign, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import videos from '../../assets/data/videos.json'
import VideoListItem from '../../components/VideoListItem/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer/index';

const VideoScreen = () => {
    let viewsString = video.views.toString();
    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'm'
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k'
    }




    return (
        <View style={styles.videoContainer}>
            {/* vido player */}

            <VideoPlayer videoURL={video.videoUrl} thumbnailURI={video.thumbnail} />

            {/* <Image
                style={styles.videoPlayer}
                source={{ uri: video.thumbnail }}
            /> */}
            {/* video info */}
            {/* Middle container:title,subtitle,etc */}
            <View style={{ flex: 1 }}>
                <View style={styles.middleStyle}>
                    <Text style={styles.tagsStyle}>{video.tags}</Text>
                    <Text style={styles.middleStyleText}>{video.title}</Text>
                    <Text style={styles.middleStyleSubTitle}>{video.user.name} {viewsString} {video.createdAt}</Text>

                </View>
                {/* action list */}
                <View style={styles.actionListContainer}>


                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.actionListItem}>
                            <AntDesign name="like2" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.likes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="dislike2" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.likes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <Entypo name="chat" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.liveChat}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="export" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.share}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.download}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="save" size={30} color="lightgrey" />
                            <Text style={styles.actionListText}>{video.save}</Text>
                        </View>
                    </ScrollView>
                </View>
                {/* user info */}
                <View style={styles.userInfoStyle}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                        source={{ uri: video.user.image }}
                    />
                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <Text style={styles.title}>{video.user.name}</Text>
                        <Text style={styles.subscribTitle}>{video.user.subscribers} subscribers</Text>
                    </View>
                    <Text style={styles.subscriber}>Subscriber</Text>
                </View>
                {/* comments */}
                <View style={{ padding: 10 }}>
                    <Text style={{ color: "white", marginVertical: 8 }}>Comments 300</Text>

                    <View style={styles.userInfoStyle2}>
                        <Image
                            style={{ width: 35, height: 35, borderRadius: 20 }}
                            source={{ uri: video.user.image }}
                        />
                        <Text style={styles.title2}>Create native apps for Android and iOS using React</Text>
                    </View>

                </View>
                {/* recommended video */}

                {/* <FlatList
                    data={videos}
                    renderItem={({ item }) => <VideoListItem video={item} />}
                /> */}




            </View>
        </View>


    )

}


const VideoScreenWithRecommendation = () => {
    return (
        <FlatList
            data={videos}
            renderItem={({ item }) => <VideoListItem video={item} />}
            ListHeaderComponent={VideoScreen}
        />



    )

}
export default VideoScreenWithRecommendation;
