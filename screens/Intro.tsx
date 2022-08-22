import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useDispatch } from 'react-redux'
import { RootStackParamList, RouteList } from '~/consts/types/rootStackParams'
import { setUserInfo } from '~/core/redux/slices/globalSlice'
import CommonLayout from '~/src/layout/CommonLayout'
import CommonButton from '~/src/components/CommonButton'
import { SafeAreaView } from 'react-native-safe-area-context'

type PickingStepScreenProp = StackNavigationProp<RootStackParamList, RouteList>

const Intro = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<PickingStepScreenProp>()

  const [userName, setUserName] = useState('')

  const handleStartButton = () => {
    dispatch(
      setUserInfo({
        name: userName,
      })
    )

    navigation.navigate('PickingStep')
  }

  return (
    <CommonLayout>
      <Text style={{ fontSize: 12, color: '#222', textAlign: 'center', marginBottom: 15 }}>Intro Screen</Text>

      <TextInput
        style={{
          color: '#222',
          textAlign: 'center',
          borderBottomColor: '#222',
          borderBottomWidth: 1,
          padding: 2,
          marginBottom: 15,
        }}
        placeholder="user name"
        onChangeText={setUserName}
        value={userName}
      />
      <CommonButton title="PickingStep" onPress={handleStartButton} />
    </CommonLayout>
  )
}

export default Intro
