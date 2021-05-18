import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Icon } from 'native-base'

const SearchHeader = () => {
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
            <View style={{ flexDirection: 'row', padding: 10, borderRadius: 15, backgroundColor: 'lightgrey', opacity: .5 }}>
                <Icon
                    type="AntDesign"
                    name="search1"
                    style={{
                        fontSize: 24,
                        color: 'black',
                        // opacity: .3
                    }}
                />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ paddingLeft: 15, width: '93%', fontSize: 16 }}
                />
            </View>
            {/* <View>
                <Icon
                    type="Ionicons"
                    name="ios-scan"
                    style={{
                        fontSize: 30
                    }}
                />
            </View> */}
        </View>

    )
}

export default SearchHeader
