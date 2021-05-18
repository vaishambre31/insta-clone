import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, ScrollView } from 'react-native'
import { Icon } from 'native-base'

import Container from '../../../components/common/Container'
import SearchHeader from '../../../components/SearchHeader'
import Tag from './components/Tag'
import Images from '../../../assets/images'
import BigGrid from './components/BigGrid'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'

const index = () => {
    const data = [
        {
            type: "big_grid_left",
            data: [{}, {}, {}]
        },
        {
            type: "normal",
            data: [{}, {}, {}, {}, {}, {}]
        },
        {
            type: "big_grid_right",
            data: [{}, {}, {}]
        },
        {
            type: "normal",
            data: [{}, {}, {}, {}, {}, {}]
        },
    ]

    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    const renderNormalRows = (item, index) => {
        return <TouchableOpacity
            activeOpacity={1}
            style={[
                {
                    height: (height / 6),
                    width: (width / 3),
                    marginBottom: 2,
                },
                index % 3 !== 0
                    ? { paddingLeft: 2 }
                    : { paddingLeft: 0 },

                // index === 2 ? {
                //     position: 'absolute',
                //     left: 10,
                //     top: 10
                // } : null
            ]}
            onPress={() => {
            }}
        >
            <Image
                style={{
                    height: '100%',
                    width: '100%',
                }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stockclient-85fe3.appspot.com/o/79464997_813218285768063_3381910407740911274_n.jpg?alt=media&token=23482bc8-6575-446a-bcf0-d7fb4bdd6bad' }}
            />
            {/* <Text style={{ padding: 30, justifyContent: 'center', textAlign: 'center', borderWidth: 1 }}>{index}</Text> */}
        </TouchableOpacity>
    }

    return (
        <Container SafeAreaView>
            <ScrollView>
                <SearchHeader />

                {
                    data.map(item => (
                        <>
                            {
                                item.type === "big_grid_left"
                                && <BigGrid side="left" data={item.data} />
                            }
                            {
                                item.type === "normal" && <FlatList
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3}
                                    data={item.data}
                                    renderItem={({ item, index }) => (
                                        <>
                                            {renderNormalRows(item, index)}
                                        </>
                                    )}
                                />
                            }
                            {
                                item.type === "big_grid_right"
                                && <BigGrid side="right" data={item.data} />
                            }
                        </>
                    ))
                }

            </ScrollView>
        </Container >
    )
}

export default index
