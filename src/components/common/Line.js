import React from 'react'
import { View, Text } from 'react-native'

const Line = ({ style }) => {
    return (
        <Text style={[{
            borderWidth: 1,
            borderColor: 'lightgrey',
            margin: 0
        }, style]}></Text>
    )
}

export default Line
