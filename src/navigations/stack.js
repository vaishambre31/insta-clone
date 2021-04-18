import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { LoginScreen, UserHome, UserProfile } from './screens';

//login stack
const LoginFlow = createStackNavigator();
export const LoginStack = () => (
    <LoginFlow.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <LoginFlow.Screen name="Login" component={LoginScreen} />
        <LoginFlow.Screen name="Register" component={LoginScreen} />
    </LoginFlow.Navigator>
)
