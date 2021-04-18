import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const CommonImage = (props) => {
    const colors = props.isStory ? ['#c84268', '#c63968', '#d76d67', '#eaab6b', '#c63867'] : ['#FFF', '#FFF', '#FFF']
    const borderRadius = props.borderRadius ? props.borderRadius : 0

    return (
        <LinearGradient
            colors={colors}
            style={{
                borderRadius: borderRadius,
                padding: 2
            }}>
            <View
                style={{
                    backgroundColor: 'white',
                    borderRadius: borderRadius,
                    padding: 2,
                }}
            >
                <Image
                    source={props.imageUrl}
                    style={{
                        height: props.height ? props.height : '100%',
                        width: props.width ? props.width : '100%',
                        borderRadius: borderRadius
                    }}
                    resizeMode={props.resizeMode}
                />
            </View>
        </LinearGradient>
    )
}

export default CommonImage
