import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feed, Search, Profile, Reel, Activity } from './screens';
import { FeedStack } from './stack';
import { Icon } from 'native-base';
import { colorPrimary, colorSecondary } from '../styles/colors';
import { useSelector } from 'react-redux';
import Images from '../assets/images';

const Tab = createBottomTabNavigator();

export default (props) => {
    const tabColor = useSelector(state => state.theme.tabBgColor)
    const tabIconColor = tabColor === colorSecondary ? colorPrimary : colorSecondary
    return (
        <Tab.Navigator
            initialRouteName="Reels"
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: tabColor
                }
            }}
        >
            <Tab.Screen
                name="Feed"
                component={FeedStack}
                options={{
                    tabBarColor: colorPrimary,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <Icon
                                name="home"
                                type="Foundation"
                                style={{ color: tabIconColor, fontSize: 32 }}
                            />
                            : tabColor === colorSecondary
                                ? <Icon
                                    name="home"
                                    type="Foundation"
                                    style={{ color: colorPrimary }}
                                />
                                : <Image
                                    source={Images.home}
                                    style={{
                                        height: 28,
                                        width: 28
                                    }}
                                />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarColor: colorPrimary,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <Icon
                                name="md-search"
                                type="Ionicons"
                                style={{ color: colorSecondary, fontSize: 32 }}
                            />
                            :
                            <Icon
                                name="search-outline"
                                type="Ionicons"
                                style={{ color: tabIconColor, fontSize: 30 }}
                            />
                    )
                }}
            />
            <Tab.Screen
                name="Reels"
                component={Reel}
                options={{
                    tabBarColor: colorSecondary,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <Image
                                source={Images.instagram_reels_white}
                                style={{
                                    height: 28,
                                    width: 28
                                }}
                            />
                            :
                            <Image
                                source={Images.instagram_reels}
                                style={{
                                    height: 28,
                                    width: 28
                                }}
                            />
                    )
                }}

            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarColor: colorPrimary,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <Icon
                                name="heart"
                                type="AntDesign"
                                style={{ color: colorSecondary, fontSize: 28 }}
                            />
                            : <Icon
                                name="hearto"
                                type="AntDesign"
                                style={{ color: tabIconColor, fontSize: 26 }}

                            />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarColor: colorPrimary,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={{ uri: 'https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg' }}
                            style={{
                                height: focused ? 29 : 28,
                                width: focused ? 29 : 28,
                                borderRadius: 30,
                                borderWidth: focused ? 1 : 0
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
