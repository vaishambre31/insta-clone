import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { LoginScreen, UserHome, UserProfile, Feed, OpenStory } from './screens';

//login stack
const StackFlow = createStackNavigator();
export const LoginStack = () => (
    <StackFlow.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <StackFlow.Screen name="Login" component={LoginScreen} />
        <StackFlow.Screen name="Register" component={LoginScreen} />
    </StackFlow.Navigator>
)

export const FeedStack = () => (
    <StackFlow.Navigator
        initialRouteName="Feed"
        headerMode="none"
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <StackFlow.Screen name="Feed" component={Feed} />
        <StackFlow.Screen name="OpenStory" component={OpenStory} />
    </StackFlow.Navigator>
)
