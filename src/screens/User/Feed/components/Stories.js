import React from 'react'
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Images from '../../../../assets/images'
import CommonImage from '../../../../components/common/CommonImage'
import { colorPrimary, textColor } from '../../../../styles/colors'
import { FONT_FAMILY_OpenSans_Regular, FONT_FAMILY_OpenSans_Light, FONT_FAMILY_OpenSans_SemiBold } from '../../../../styles/typography'

const Stories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <View style={{ paddingRight: 8, paddingLeft: 15 }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <CommonImage
                            imageUrl={Images.steel}
                            height={70}
                            width={70}
                            borderRadius={70}
                            isStory={false}
                        />
                        <Image
                            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-512.png' }}
                            style={styles.smallImage}
                        />
                    </View>
                    <Text
                        numberOfLines={1}
                        style={styles.text}>
                        Your Story
                    </Text>
                </View>

                <FlatList
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('OpenStory')}
                            style={{
                                marginHorizontal: 8,
                                // borderWidth: 1
                            }}
                        >
                            <CommonImage
                                imageUrl={Images.steel}
                                height={70}
                                width={70}
                                borderRadius={70}
                                isStory
                                story={{
                                    id: "",
                                    watched: false
                                }}
                            />
                            <Text
                                style={styles.text}
                                numberOfLines={1}
                            >
                                rodur4891
                        </Text>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed'
    },
    text: {
        width: 75,
        textAlign: 'center',
        marginVertical: 5,
        color: textColor
    },
    smallImage: {
        height: 23,
        width: 23,
        borderRadius: 23,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderWidth: 1,
        borderColor: colorPrimary
    }
})

export default Stories
