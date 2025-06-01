import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View className="flex-1 bg-primary">
            <ScrollView className="flex-1 px-5">
            <Text className="text-white text-bold w-12 h-10 mt-20 mb-5 mx-auto">profile</Text>
            </ScrollView>
    </View>
  )
}

export default profile