import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Video from 'react-native-video'

import CommonImage from './CommonImage'
import Images from '../../assets/images'
import { Icon } from 'native-base'
import { colorPrimary, colorSecondary } from '../../styles/colors'

const PostContainer = (props) => {

    props.navigation.addListener('focus', () => {
        setPaused(false)
    });
    props.navigation.addListener('blur', () => {
        setPaused(true)
    });

    const [isMuted, setIsMuted] = useState(false)
    const [paused, setPaused] = useState(false)
    const [isSoundIconVisible, setIsSoundIconVisible] = useState(false)

    const [duration, setDuration] = useState(0)

    const { type, postUrl } = props.postContent;
    const IGTV = () => (
        <Text>reel</Text>
    )

    const Reel = () => (
        <View style={styles.videoContainer}
            onTouchStart={() => {
                setIsMuted(!isMuted)
                setIsSoundIconVisible(true)
                setTimeout(() => {
                    setIsSoundIconVisible(false)
                }, 2500);
            }}
        >
            <Video source={{ uri: postUrl }}
                ref={(ref) => {
                    this.player = ref
                }}
                style={styles.videoStyle}
                resizeMode="contain"
                repeat={true}
                paused={paused}
                muted={isMuted}
                playInBackground={false}
                playWhenInactive={false}
                onLoad={(item) => setDuration(item.duration)}
            />
            {
                isSoundIconVisible && <View style={styles.volumeIconContainer}>
                    {
                        isMuted
                            ? <Icon
                                name="volume-mute-outline"
                                type="Ionicons"
                                style={styles.muteIcon}
                            />
                            : <Icon
                                name="volume-high-outline"
                                type="Ionicons"
                                style={styles.muteIcon}
                            />
                    }
                </View>
            }
        </View>
    )

    return (
        <View style={{
            flex: 1
        }}>
            {
                type === 'image'
                    ? <Image
                        source={Images.steel}
                        style={{
                            height: 200,
                            width: '100%'
                        }}
                    />
                    : type === 'reel'
                        ? Reel()
                        : IGTV()
            }

        </View>
    )
}

const styles = StyleSheet.create({
    videoContainer: {
        height: 350,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'lightgrey'
    },
    videoStyle: {
        height: '100%',
        width: '100%'
    },
    volumeIconContainer: {
        backgroundColor: colorSecondary,
        height: 26,
        width: 26,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 10,
        marginBottom: 10
    },
    muteIcon: {
        fontSize: 16,
        color: colorPrimary
    }
})

export default PostContainer
