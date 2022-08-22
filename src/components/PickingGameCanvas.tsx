import React, { useEffect, useRef } from 'react'
import { Dimensions, View } from 'react-native'

import WebView, { WebViewMessageEvent } from 'react-native-webview'
import styled from 'styled-components/native'
import { SET_CANVAS_OPTION, GET_GAME_LOG } from '~/consts/web-view-message-type'

import gameMap from '~/utils/picking-game/picking-game-map.json'

interface StyleProps {
  canvasWidth: number
}
const StyledWebview = styled(WebView)<StyleProps>`
  width: ${(props) => props.canvasWidth}px;
  height: 100%;
  border: 1px solid red;
`
const PickingGameCanvas = () => {
  const webviewRef = useRef<WebView>(null)

  const windowHeight = Dimensions.get('window').height
  const gameScreenRatio = 16 / 10

  const sendGameOption = () => {
    if (webviewRef.current) {
      webviewRef.current.postMessage(
        JSON.stringify({
          type: SET_CANVAS_OPTION,
          data: {
            map: gameMap,
          },
        })
      )
    }
  }

  const handleOnMessage = (event: WebViewMessageEvent) => {
    const onMsgParam = JSON.parse(event.nativeEvent.data)

    switch (onMsgParam.type) {
      case GET_GAME_LOG:
        console.log(onMsgParam.message)
        break

      default:
        break
    }
  }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#768d8f',
      }}
    >
      <StyledWebview
        ref={webviewRef}
        onMessage={handleOnMessage}
        onLoad={sendGameOption}
        source={{ uri: 'file:///android_asset/game/index.html' }}
        originWhitelist={['*']}
        canvasWidth={Math.floor(windowHeight * gameScreenRatio)}
      />
    </View>
  )
}

export default PickingGameCanvas
