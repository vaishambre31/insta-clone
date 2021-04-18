import React, { useState, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Video from 'react-native-video'
import * as Animatable from 'react-native-animatable';
import MarqueeText from 'react-native-marquee';

import { colorPrimary, colorSecondary } from '../../styles/colors';
import { Icon } from 'native-base';
import ReelComponent from './ReelComponent';
import Images from '../../assets/images';
import UserActions from './UserActions';

const VideoPlayer = (props) => {

    const { navigation, videoUrl, containerStyle, currentVisibleIndex, flatIndex, isReelsTab, resizeMode } = props

    navigation.addListener('focus', () => {
        setPaused(false)
    });
    navigation.addListener('blur', () => {
        setPaused(true)
    });

    const [isMuted, setIsMuted] = useState(false)
    const [paused, setPaused] = useState(true)
    const [duration, setDuration] = useState(0)
    const [isSoundIconVisible, setIsSoundIconVisible] = useState(false)

    const [liked, setLiked] = useState(false)
    const [doubleTab, setDoubleTab] = useState(false)
    const [backCount, setBackCount] = useState(1)

    const likeIconPress = () => setLiked(!liked)

    const onPostTap = () => {
        if (!liked) {
            setBackCount(backCount + 1)
            if (backCount == 2) {
                setDoubleTab(true)
                setLiked(!liked)
            } else {
                setTimeout(() => {
                    setBackCount(1)
                    setDoubleTab(false)
                }, 1000)
            }
        }
    }

    const onVideoPress = () => {
        setIsMuted(!isMuted)
        // if (!isReels) {
        setIsSoundIconVisible(true)
        setTimeout(() => {
            setIsSoundIconVisible(false)
        }, 2500);
        // onPostTap()
        // }
    }

    const renderPostSoundIcon = () => (
        <View style={styles.volumeIconContainer}>
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
    )

    const renderReelSoundIcon = () => (
        <View style={styles.volumeIconContainer2}>
            <>
                {
                    isMuted
                        ? <Icon
                            name="volume-mute-outline"
                            type="Ionicons"
                            style={styles.muteIcon2}
                        />
                        : <Icon
                            name="volume-high-outline"
                            type="Ionicons"
                            style={styles.muteIcon2}
                        />
                }
            </>
        </View>
    )

    const renderBottom = () => {
        return <ReelComponent
            style={{
                bottom: 20,
                left: 20,
                width: '70%'
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    source={Images.steel}
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40
                    }}
                />
                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 18, marginHorizontal: 10 }}>username </Text>
                <TouchableOpacity
                    activeOpacity={1}>
                    <Text style={{ color: colorPrimary, fontSize: 16, fontWeight: '600' }}>Follow</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginVertical: 10,
                marginHorizontal: 3
            }}>
                <Text style={{ color: colorPrimary, fontSize: 18 }}>video caption ect ect</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 3
            }}>
                <Icon
                    name="multitrack-audio"
                    type="MaterialIcons"
                    style={{
                        fontSize: 25,
                        color: colorPrimary
                    }}
                />
                <MarqueeText
                    style={{
                        fontSize: 16,
                        color: colorPrimary
                    }}
                    duration={5000}
                    marqueeOnStart
                    loop
                >
                    sardi mai garmi hai garmi mai sardi hai cmskcsmc cmslcmslcm
        </MarqueeText>
            </View>
        </ReelComponent>
    }
    const renderRight = () => {
        return <ReelComponent
            style={{
                right: 20,
                bottom: 20
            }}
        >
            <UserActions
                liked={liked}
                // bookMarked={bookMarked}
                likeIconPress={likeIconPress}
                // bookmarkIconPress={bookmarkIconPress}
                isReelsTab={true}
                mainStyle={styles.actionContainer}
            />
        </ReelComponent>
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={containerStyle}
            onPress={onVideoPress}
        >
            <Video source={{ uri: videoUrl }}
                // ref={(ref) => {
                //     this.player = ref
                // }}
                style={styles.videoStyle}
                resizeMode={resizeMode == null ? "cover" : resizeMode}
                repeat={false}
                paused={currentVisibleIndex !== flatIndex || paused}
                muted={isMuted}
                playInBackground={false}
                playWhenInactive={false}
                onLoad={(item) => {
                    setDuration(item.duration)
                }}
            />

            {
                !isReelsTab
                    ? isSoundIconVisible && renderPostSoundIcon()
                    : isSoundIconVisible && renderReelSoundIcon()
            }

            {isReelsTab && renderBottom()}
            {isReelsTab && renderRight()}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    volumeIconContainer2: {
        flex: 1,
        position: 'absolute',
        left: '40%',
        top: '45%',
        opacity: 0.5,
        backgroundColor: 'black',
        borderRadius: 500
    },
    muteIcon: {
        fontSize: 14,
        color: colorPrimary
    },
    muteIcon2: {
        fontSize: 20,
        color: colorPrimary,
        padding: 25
    },
    actionContainer: {
        // flexDirection: 'row',
        alignItems: 'center'
        // marginHorizontal: 20,
        // marginVertical: 10
    },
    actionMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    likeTextBold: {
        fontWeight: 'bold',
        fontSize: 16
    },
    iconStyle: {
        height: 30,
        width: 30,
        marginVertical: 10
    },
})

export default VideoPlayer
