import AsyncStorage from '@react-native-async-storage/async-storage'

const setLoggedInUser = async (user) => {
    await AsyncStorage.setItem('user', JSON.stringify(user))
}

const getLoggedInUser = async () => {
    return await AsyncStorage.getItem('user')
}

const clearStorage = async () => {
    await AsyncStorage.clear()
}

export {
    setLoggedInUser,
    getLoggedInUser,
    clearStorage
}