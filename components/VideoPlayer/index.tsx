import React, { useRef } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

interface VideoPlayerProps {
    videoURL: string;
    thumbnailURI: string;

}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURL, thumbnailURI } = props;
    // const videoRef=useRef<Video>(null);
    return (
        <View>
            <Video
                source={{ uri: videoURL }}
                style={{ width: "100%", aspectRatio: 16 / 9 }}
                posterSource={{
                    uri: thumbnailURI,
                }}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"

            />

        </View>
    )

}
export default VideoPlayer;