import React from 'react'
import { Icon } from "native-base";

import { colorSecondary } from '../styles/colors';

const HomeIcon = ({ onPress, style }) => (
    <Icon
        name="home"
        type="Foundation"
        style={[style]}
        onPress={onPress}
    />
)

export {
    HomeIcon
}