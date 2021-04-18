import React, { useEffect, useState, useRef } from 'react'
import { View, Text, FlatList, Dimensions, StyleSheet, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux';

import { ChangeTabColor } from '../../../store/actions/theme';
import { colorSecondary, colorPrimary } from '../../../styles/colors';
import { FEED, REELS } from '../../../utils/data';
import VideoPlayer from '../../../components/common/VideoPlayer';
import InstaHeader from '../../../components/common/InstaHeader';
import { Icon } from 'native-base';
import ReelComponent from '../../../components/common/ReelComponent';
import { getTopPosition } from '../../../utils/common';

const index = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()

    const StatusBarHeight = StatusBar.currentHeight;

    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null)

    useEffect(() => {
        navigation.addListener('focus', () => {
            // change tab onFocus color
            dispatch(ChangeTabColor(colorSecondary))
        });
        navigation.addListener('blur', () => {
            // change tab onBlur color
            dispatch(ChangeTabColor(colorPrimary))
        });
    }, [navigation]);

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems[0].isViewable) {
            setCurrentVisibleIndex(viewableItems[0].index);
        }

    })

    const reelHeader = () => (
        <>
            <ReelComponent
                // left={10}
                style={{
                    left: 20,
                    top: getTopPosition(20)
                }}
            >
                <Text style={{ color: colorPrimary, fontSize: 22, fontWeight: 'bold' }}>Reels</Text>
            </ReelComponent>
            <ReelComponent
                // left={10}
                style={{
                    right: 20,
                    top: getTopPosition(20)
                }}
            >
                <Icon
                    name="camera"
                    type="Entypo"
                    style={{
                        color: colorPrimary
                    }}
                />
            </ReelComponent>
        </>
    )

    return (
        <View style={styles.containerStyle}>
            <FlatList
                data={REELS}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <VideoPlayer
                        videoUrl={item.post.postUrl}
                        containerStyle={styles.videoContainer}
                        currentVisibleIndex={currentVisibleIndex}
                        flatIndex={index}
                        navigation={props.navigation}
                        isReelsTab={true}
                    />
                )}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                pagingEnabled={true}
            // ref={FlatListRef.current}
            />

            {reelHeader()}


        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colorSecondary
    },
    videoContainer: {
        flex: 1,
        height: Dimensions.get('window').height - 80,
        width: '100%',
    },
})

export default index
