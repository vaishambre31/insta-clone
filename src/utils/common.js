import React from 'react'
import { Platform } from 'react-native'

export const getTopPosition = (height) => {
    return Platform.OS === 'ios' ? 20 + height : height
}