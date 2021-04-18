import React from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { colorPrimary } from '../../styles/colors'

const Container = props => {
    //props ==>> SafeAreaView,KeyboardAvoidingView,ScrollView
    const MainView = props.SafeAreaView
        ? SafeAreaView
        : View
    return (
        <>
            {props.KeyboardAvoidingView && Platform.OS === "ios"
                ? <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                    <MainView style={[styles.container, props.style]}>
                        {
                            props.ScrollView
                                ? <ScrollView>
                                    {props.children}
                                </ScrollView>
                                : props.children
                        }
                    </MainView>
                </KeyboardAvoidingView>
                : <MainView style={[styles.container, props.style]}>
                    {
                        props.ScrollView
                            ? <ScrollView>
                                {props.children}
                            </ScrollView>
                            : props.children
                    }
                </MainView>
            }
        </>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPrimary
    }
})