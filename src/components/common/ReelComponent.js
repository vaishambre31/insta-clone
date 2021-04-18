import React from 'react'
import { View, Text } from 'react-native'

const ReelComponent = ({ top, bottom, left, right, style, children }) => {
    return (
        <View style={[{
            position: 'absolute',
        }, style]}>
            {children}
        </View>
    )
}

export default ReelComponent
