import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import * as Animatable from 'react-native-animatable';

import CommonImage from '../../../../components/common/CommonImage'
import Images from '../../../../assets/images'
import { textColor, boldTextColor, colorPrimary } from '../../../../styles/colors'
import { FONT_FAMILY_OpenSans_SemiBold } from '../../../../styles/typography'
import PostContainer from '../../../../components/common/PostContainer'
import VideoPlayer from '../../../../components/common/VideoPlayer'
import UserActions from '../../../../components/common/UserActions';

const Post = ({ post, navigation, currentIndex, currentVisibleIndex }) => {

    const [liked, setLiked] = useState(false)
    const [bookMarked, setBookMarked] = useState(false)
    const [doubleTab, setDoubleTab] = useState(false)
    const [backCount, setBackCount] = useState(1)

    const likeIconPress = () => setLiked(!liked)
    const bookmarkIconPress = () => setBookMarked(!bookMarked)

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

    const renderPostContent = () => {
        return <TouchableOpacity
            activeOpacity={1}
            onPress={onPostTap}
        >
            {
                post.post.type === 'reel'
                    ? LoadReelVideo()
                    : post.post.type === 'image'
                        ? LoadImages()
                        : LoadIGTV()
            }
            {doubleTab && DoubletapIcon()}
        </TouchableOpacity>
    }

    const DoubletapIcon = () => {
        return <Animatable.View
            animation="bounceIn"
            style={styles.doubleTapStyle}>
            <Icon
                name="heart"
                type="AntDesign"
                style={styles.doubleIconStyle}
            />
        </Animatable.View>
    }

    const LoadReelVideo = () => {
        return <VideoPlayer
            containerStyle={styles.VideoPlayerContainer}
            videoUrl={post.post.postUrl}
            currentVisibleIndex={currentVisibleIndex}
            flatIndex={currentIndex}
            navigation={navigation}
            isReelsTab={false}
            resizeMode="contain"
        />
    };

    const LoadImages = () => {
        return <View>
            <Image
                style={{
                    height: 350,
                    width: '100%'
                }}
                source={{ uri: post.post.postUrl }}
                resizeMode="repeat"
            />
        </View>
    }

    const LoadIGTV = () => {
        return <View>

        </View>
    }

    const renderLikeIcon = () => {
        return <>
            {
                liked
                    ? <Animatable.View animation="bounceIn">
                        <Icon
                            name="heart"
                            type="AntDesign"
                            style={{
                                fontSize: 25,
                                marginRight: 15,
                                color: 'red'
                            }}
                            onPress={likeIconPress}
                        />
                    </Animatable.View>
                    : <>
                        <Icon
                            name="hearto"
                            type="AntDesign"
                            style={{
                                fontSize: 25,
                                marginRight: 15,
                            }}
                            onPress={likeIconPress}
                        />
                    </>
            }
        </>
    }

    const renderBookMarked = () => {
        return <>
            {
                bookMarked ? <Animatable.View animation="bounceIn">
                    <Icon
                        name="bookmark"
                        type="FontAwesome"
                        style={styles.bookmarIconStyle}
                        onPress={bookmarkIconPress}
                    />
                </Animatable.View>
                    : <Icon
                        name="bookmark-o"
                        type="FontAwesome"
                        style={styles.bookmarIconStyle}
                        onPress={bookmarkIconPress}
                    />
            }
        </>
    }

    const renderConnection = () => {
        return [{}, {}, {}, {}].slice(0, 2).map((item, index) => (
            <View
                style={{
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    marginRight: -8,
                }}
                key={index}
            >
                <Image
                    source={Images.steel}
                    style={{ height: '100%', width: '100%', borderRadius: 18, borderColor: 'red' }}
                />
            </View>
        ))

    }


    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <CommonImage
                    isStory={true}
                    imageUrl={Images.steel}
                    height={35}
                    width={35}
                    borderRadius={35}
                />
                <Text
                    style={styles.headerText}
                    numberOfLines={1}
                >
                    {post.profile.username}
                </Text>
                <Icon
                    name="more-vert"
                    type="MaterialIcons"
                    style={{ color: textColor }}
                />
            </View>

            {renderPostContent()}

            <UserActions
                liked={liked}
                bookMarked={bookMarked}
                likeIconPress={likeIconPress}
                bookmarkIconPress={bookmarkIconPress}
                isReelsTab={false}
            />

            <View style={{
                marginHorizontal: 20
            }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    {renderConnection()}
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>
                        Liked By <Text style={styles.likeTextBold}>Nikhil ambre </Text>and <Text style={styles.likeTextBold}>others </Text>
                    </Text>
                </View>

                <Text style={[styles.likeTextBold, { marginVertical: 8 }]} numberOfLines={2}>
                    vaishambre31 <Text style={{ fontWeight: 'normal' }}> vaish ambdef r dcldcdc cmdoclmd cmdlcmdlc cmldcmdlc cmdlcmdlc cdmcldmccldc,dlc  ndkcndkc cdkcndkc cdcnk cdcd</Text>
                </Text>

                <Text style={{ fontSize: 16, color: '#979797' }}>View all 26 comments</Text>

                <Text style={{ fontSize: 12, color: '#979797', marginVertical: 8 }}>2 minutes ago</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightgrey'
        marginBottom: 10
    },
    VideoPlayerContainer: {
        height: 400,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'lightgrey'
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 20
    },
    headerText: {
        color: boldTextColor,
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
        fontFamily: FONT_FAMILY_OpenSans_SemiBold
    },
    doubleTapStyle: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        // borderWidth: 1
    },
    doubleIconStyle: {
        fontSize: 55,
        marginRight: 15,
        color: colorPrimary
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    iconStyle: {
        height: 25,
        width: 25,
        marginRight: 15
    },
    actionMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookmarIconStyle: {
        marginRight: 20
    },
    likeTextBold: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Post
