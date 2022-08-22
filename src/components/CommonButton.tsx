import React, { useState } from 'react'
import { TouchableNativeFeedback, Text, View } from 'react-native'
import styled, { css } from 'styled-components/native'
import { colorSet } from '~/consts/styles'

interface Props {
  onPress: () => void
  title: string
  theme?: 'dark' | 'white'
}

const StyledButton = styled(View)`
  border-radius: 30px;
  padding: 12px;
  margin: 0 10px;
  width: 100%;
  max-width: 200px;
  border: 1px solid ${colorSet.baseColor};
  transition: 0.2s background-color;

  ${({ theme }) =>
    theme === 'dark'
      ? css`
          background-color: ${colorSet.baseColor};
        `
      : css`
          background-color: #ffffff;
        `}
`

const StyledButtonText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => (theme === 'dark' ? `#ffffff` : `${colorSet.baseColor}`)};
`

const CommonButton = ({ onPress, title, theme = 'dark' }: Props) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <StyledButton theme={theme}>
        <StyledButtonText theme={theme}>{title}</StyledButtonText>
      </StyledButton>
    </TouchableNativeFeedback>
  )
}

export default CommonButton
