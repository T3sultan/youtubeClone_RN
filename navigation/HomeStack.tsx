import React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Feather, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../components/VideoListItem/HomeScreen';

const logo = require("../assets/images/logo.png")
const HomeStack = createStackNavigator<TabOneParamList>();


function CustomHeader() {

    return (
        <View style={{ backgroundColor: "#000", paddingTop: 20 }}>
            <View style={{
                margin: 10,
                padding: 5,
                flexDirection:'row',
                justifyContent:"space-between",
                alignItems: "center",

            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 100, height: 25 }}
                    source={logo}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between',width:130}}>
                    <Feather name="cast" size={24} color="white" />
                    <AntDesign name="bells" size={24} color="white" />
                    <AntDesign name="search1" size={24} color="white" />
                    <FontAwesome name="user-circle-o" size={24} color="white" />

                </View>



            </View>
        </View>
    )

}

function HomeStackComponent() {
    return (
        <HomeStack.Navigator screenOptions={{
            header: () => <CustomHeader />
        }}>
            <HomeStack.Screen
                name="TabOneScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </HomeStack.Navigator>
    );
}
export default HomeStackComponent;