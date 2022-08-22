import React, { useEffect, useRef, useState } from 'react'
import CommonLayout from '~/src/layout/CommonLayout'
import PickingGameCanvas from '../src/components/PickingGameCanvas'

const PickingStep = () => {
  return (
    <CommonLayout>
      <PickingGameCanvas />
    </CommonLayout>
  )
}

export default PickingStep
