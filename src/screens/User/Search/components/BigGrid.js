import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Images from '../../../../assets/images'

const BigGrid = ({ side, data }) => {

    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    return (
        <View style={{
            flexDirection: 'row',
            marginBottom: 2
        }}>
            {
                side === "left"
                    ? <>
                        <View style={{
                            height: height / 6,
                            width: width / 3,
                        }}>
                            <View style={{
                                marginBottom: 2,
                                // marginLeft: 2
                            }}>
                                <Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    source={Images.steel}
                                />
                            </View>
                            <View style={{
                                // marginRight: 2
                            }}>
                                <Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        // marginLeft: 2
                                    }}
                                    source={Images.steel}
                                />
                            </View>
                        </View>

                        <View style={{
                            // flexDirection: 'row'
                            flex: 1,
                            height: height / 3,
                            width: width,
                        }}>
                            <Image
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    marginLeft: 2,
                                }}
                                source={Images.steel}
                            />
                        </View>
                    </>
                    : <>
                        <View style={{
                            // flexDirection: 'row'
                            flex: 1,
                            height: height / 3,
                            width: width,
                            // marginRight: 2
                        }}>
                            <Image
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    // marginLeft: 2,
                                }}
                                source={Images.steel}
                            />
                        </View>


                        <View style={{
                            height: height / 6,
                            width: width / 3,
                        }}>
                            <View style={{
                                marginBottom: 2,
                                marginLeft: 2
                            }}>
                                <Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    source={Images.steel}
                                />
                            </View>
                            <View style={{
                                marginRight: 2
                            }}>
                                <Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        marginLeft: 2
                                    }}
                                    source={Images.steel}
                                />
                            </View>
                        </View>

                    </>
            }
        </View>
    )
}

export default BigGrid
