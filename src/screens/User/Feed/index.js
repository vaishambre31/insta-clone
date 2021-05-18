import React, { useState, useRef } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import Container from '../../../components/common/Container'
import InstaHeader from '../../../components/common/InstaHeader'
import Stories from './components/Stories'
import Post from './components/Post'
import Line from '../../../components/common/Line'
import { FEED } from '../../../utils/data'
import VideoPlayer from '../../../components/common/VideoPlayer'
import { isValid } from '../../../utils/validation'

const index = (props) => {
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null)

    const viewConfigRef = useRef({
        // waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 90,
        // itemVisiblePercentThreshold: 95
    })

    const onViewRef = useRef(({ viewableItems }) => {
        const check = isValid(viewableItems[0]) ? viewableItems[0].isViewable : false
        if (check) {
            setCurrentVisibleIndex(viewableItems[0].index);
        }

    })

    return (
        <Container SafeAreaView>
            <InstaHeader />

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<Stories navigation={props.navigation} />}
                data={FEED}
                renderItem={({ item, index }) => (
                    <Post
                        post={item}
                        navigation={props.navigation}
                        currentIndex={index}
                        currentVisibleIndex={currentVisibleIndex}
                    />
                )}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </Container>
    )
}

export default index
