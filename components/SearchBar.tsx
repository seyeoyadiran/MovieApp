import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { icons } from '../constants/icons';

interface Props{
    placeHolder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeHolder, onPress, value, onChangeText}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} className='size-5' resizeMode="contain" tintColor="#ab8bff"/>
        {<Image source={icons.star} 
        tintColor="#151312" className="size-5"/> }
      <TextInput
            onPress={onPress}
            placeholder={placeHolder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#ab8bdb"
            className="flex-1 ml-2 text-white" 
      />

    </View>
  )
}

export default SearchBar