import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

import Images from '../../assets/images'
import { Icon } from 'native-base';
import { colorPrimary, colorSecondary } from '../../styles/colors';

const UserActions = ({ isReelsTab, liked, bookMarked, likeIconPress, bookmarkIconPress, mainStyle }) => {

    const size = isReelsTab ? 30 : 25
    const marginRight = isReelsTab ? 0 : 15

    const renderLikeIcon = () => {
        return <>
            {
                liked
                    ? <>
                        <Animatable.View animation="bounceIn">
                            <Icon
                                name="heart"
                                type="AntDesign"
                                style={[styles.likeIconStyle, { fontSize: size, color: 'red', marginRight: marginRight }]}
                                onPress={likeIconPress}
                            />
                        </Animatable.View>
                        {isReelsTab && actionCounts()}
                    </>
                    : <>
                        <Icon
                            name="hearto"
                            type="AntDesign"
                            style={[styles.likeIconStyle, { fontSize: size, marginRight: marginRight, color: isReelsTab ? colorPrimary : colorSecondary }]}
                            onPress={likeIconPress}
                        />
                        {isReelsTab && actionCounts()}
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
    const actionCounts = () => <Text style={{
        color: colorPrimary,
        marginBottom: 15
    }}>21.2K
    </Text>

    return (
        <>
            {
                !isReelsTab
                    ? <View style={styles.actionMainContainer}>
                        <View style={styles.actionContainer}>
                            {renderLikeIcon()}
                            <Icon
                                name="comment"
                                type="Fontisto"
                                style={[styles.iconStyle, { fontSize: size - 2, color: isReelsTab ? colorPrimary : colorSecondary }]}
                            />
                            <Icon
                                name="send"
                                type="Feather"
                                style={[styles.iconStyle, { fontSize: size, color: isReelsTab ? colorPrimary : colorSecondary }]}
                            />
                        </View>
                        {renderBookMarked()}
                    </View>
                    : <View style={[mainStyle]}>

                        {renderLikeIcon()}

                        <Icon
                            name="comment-o"
                            type="FontAwesome"
                            style={[styles.iconStyle, { fontSize: size, color: isReelsTab ? colorPrimary : colorSecondary, marginRight: marginRight }]}
                        />
                        {actionCounts()}
                        <Icon
                            name="send"
                            type="Feather"
                            style={[styles.iconStyle, { fontSize: size, color: isReelsTab ? colorPrimary : colorSecondary, marginRight: marginRight, marginTop: 10, marginBottom: 5 }]}
                        />

                        <View style={{
                            marginTop: 35
                        }}>
                            <Icon
                                name="more-vert"
                                type="MaterialIcons"
                                style={{
                                    fontSize: size,
                                    height: size,
                                    width: size,
                                    color: colorPrimary,
                                }}
                            />
                        </View>

                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
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
        marginVertical: 10,
    },
    iconStyle: {
        marginRight: 15,
        marginBottom: 15,
    },
    actionMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bookmarIconStyle: {
        marginRight: 20
    },
    likeTextBold: {
        fontWeight: 'bold',
        fontSize: 16
    },
    likeIconStyle: {
        fontSize: 25,
        marginRight: 15,
        marginBottom: 15
    }
})

export default UserActions
