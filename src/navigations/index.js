import React, { useState, useEffect } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';

import { getLoggedInUser } from '../utils/storage'
import { ROLES } from '../utils/constant'
import { isValid } from '../utils/validation'
import { Set_User, Clear_User } from '../store/actions/auth';

import Auth from "../screens/Auth";
import { LoginStack } from './stack';
import UserNav from './UserNav';

const RootStack = createStackNavigator();
const RootNavigator = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        CheckAuth();
    }, [])

    const CheckAuth = async () => {
        try {
            const userData = await getLoggedInUser()
            const user = JSON.parse(userData)
            if (isValid(user)) {
                dispatch(Set_User(user))
                setLoading(false)
            } else {
                dispatch(Set_User(null))
                setLoading(false)
            }
        } catch (error) {
            dispatch(Clear_User())
            setLoading(false)
        }
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {
                    loading
                        ? <RootStack.Screen
                            name="Auth"
                            component={Auth}
                            options={{
                                headerShown: false
                            }} />
                        : user === null
                            ? <RootStack.Screen
                                name="LoginScreen"
                                // component={LoginStack}
                                component={UserNav}
                                options={{
                                    headerShown: false
                                }}
                            />
                            : <>
                                {
                                    user.role === ROLES.USER && <RootStack.Screen
                                        name="USER"
                                        component={UserNav}
                                        options={{
                                            headerShown: false
                                        }}
                                    />
                                }
                            </>
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigator;