import React from 'react'
import { View, Text, Platform, Image } from 'react-native'
import { Icon } from 'native-base'
import CommonImage from './CommonImage'
import Images from '../../assets/images'
import { colorPrimary, colorSecondary } from '../../styles/colors'

const InstaHeader = ({ isReelsTab, style }) => {
    // const heightHeader = Platform.OS === 'android' ? 50 : 70
    const heightHeader = 45

    return (
        <View style={{
            height: heightHeader,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 15,
            // borderWidth: 1
        }}>
            {!isReelsTab ? <Icon
                type="FontAwesome"
                name="plus-square-o"
                style={{ fontSize: 32 }}
            />
                : <Text style={{ color: colorPrimary, marginHorizontal: 10, fontSize: 22, fontWeight: 'bold' }}>Reels</Text>
            }

            {
                !isReelsTab && <View style={{
                    flex: 1,
                    // borderWidth: 1
                }}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' }}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode="contain"
                    />
                </View>
            }
            {
                !isReelsTab ? <CommonImage
                    imageUrl={Images.messenger}
                    height={28}
                    width={28}
                    style={{
                        borderWidth: 0
                    }}
                />
                    : <Icon
                        name="camera"
                        type="Entypo"
                        style={{
                            color: colorPrimary,
                            marginHorizontal: 10
                        }}
                    />
            }
        </View>
    )
}

export default InstaHeader
