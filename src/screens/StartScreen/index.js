import React from 'react'
import { View } from 'react-native'
import { useSelector } from "react-redux";

import RootNavigator from '../../navigations';
// import Alert from '../../components/Alert';
// import Loader from '../../components/Loader';

const StartScreen = () => {
    const isGlobal = useSelector(state => state.loading.isGlobal);

    return (
        <View style={{ flex: 1 }}>
            <RootNavigator />
            {/* {isGlobal && <Loader />} */}
            {/* <Alert /> */}
        </View>
    )
}

export default StartScreen
