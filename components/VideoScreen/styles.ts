import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
    videoContainer:{
        paddingTop:20,
        backgroundColor:"#141414",
        flex:1
       

    },
    videoPlayer:{
        width: '100%',
        aspectRatio:16/9,
       
    },
    middleStyle: {
        margin:11,
     

    },
    middleStyleText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '500',
        marginVertical:10
    },
    middleStyleSubTitle: {
        color: "grey",
        fontSize: 14,
        fontWeight: "400",
        
    },
    tagsStyle:{
        color: "#09a0eb",
        fontSize: 14,
        fontWeight: '500',
        marginBottom:5

    },
    actionListContainer:{
       // flexDirection:"row",
        marginVertical:10

    },
    actionListItem:{
        justifyContent:"space-around",
        alignItems:"center",
        width: 70,
        height: 60,
       

    },
    actionListText:{
        color: "white",
        
    },
    userInfoStyle:{
        flexDirection:"row",
       
        alignItems:"center",
        borderColor:"#343536",
        borderTopWidth:1,
        borderBottomWidth:1,
        padding:10

       
    },
    userInfoStyle2:{
        flexDirection:"row",   
        alignItems:"center",
        marginVertical:10
     

    },
    title:{
        color: "#fff",
        fontSize:15,
        fontWeight:"bold"

    },
    subscriber:{

        color: "red",
        fontSize:20,
        fontWeight:"bold"

    },
    subscribTitle:{
        color: "grey",
        fontSize:15


    },
    subscriberContaier:{
        
     
      
    },
    title2:{
        color: "#f2f4f5",
       
        marginLeft:10

    }



})
export default styles;
