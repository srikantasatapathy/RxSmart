import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PostScreen = () => {
    const navigation:any = useNavigation()
  return (
    <View>
      <Text>PostScreen</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('postdetail')} style={{padding:4, backgroundColor:'green'}}>
      <Text>
      Go to details
        </Text>  
      </TouchableOpacity>
    </View>
  )
}

export default PostScreen