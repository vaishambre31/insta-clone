import React from 'react'
import { View, Text } from 'react-native'

const Tag = ({ text }) => {
    return (
        <View style={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: 'grey', marginRight: 10 }}>
            <Text style={{ fontWeight: '500', paddingVertical: 8, paddingHorizontal: 20, fontSize: 16 }}>{text}</Text>
        </View>
    )
}

export default Tag
