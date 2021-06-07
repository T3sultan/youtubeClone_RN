import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';

interface VideoCommentProps{
    comment:{
        id:string;
        comment:string;
        createAt:string;
        likes:number;
        disLikes:number;
        replies:number;
        user:{
            name:string;
            image:string;
        }
    }

}

const VideoComment = (props:VideoCommentProps) => {
    const {comment} =props;
    return (
       
            <View style={styles.userInfoStyle2}>
                <Image
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                    source={{ uri: comment.user.image }}
                />
                <Text style={styles.title2}>{comment.comment}</Text>
            </View>

     

    )
}

const styles=StyleSheet.create({
    userInfoStyle2:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
    },
    title2:{
        color: "white",
        marginLeft:10,
    }

})
export default VideoComment;