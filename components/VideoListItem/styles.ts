
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    videoCard: {

    },
    imageStyle: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    timerStyle: {
        backgroundColor: "#00000099",
        height: 24,
        width: 45,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        position: "absolute",
        right: 5,
        bottom: 5

    },
    time: {
        color: "#fff",
        fontWeight: "bold"

    },
    titleRow: {
        flexDirection:'row',
        padding: 10,
    

    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 29,
        margin:10
    },
    middleStyle: {
        marginHorizontal:11,
        flex: 1,
        

    },
    middleStyleText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '500',
        marginBottom:5
    },
    middleStyleSubTitle: {
        color: "grey",
        fontSize: 13,
        fontWeight: "400",
        
    }

})
export default styles;