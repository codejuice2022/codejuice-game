import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas'

type Map = number[][]
type GameImages = {
  [key: string]: string
}
type GameAudio = {
  [key: string]: string
}

export const screenSize = {
  width: 1500,
  height: 560,
}

export default class PickingGame {
  canvas: Canvas | null = null
  ctx: CanvasRenderingContext2D | null = null

  startTime = 0
  width = screenSize.width
  height = screenSize.height
  then = 0
  fps = 60
  fpsInterval = 1000 / this.fps
  isCancel = false

  constructor(_canvasEl: Canvas, _map: Map, _images?: GameImages, _audios?: GameAudio) {
    console.log('constructor..')
    _canvasEl.width = this.width
    _canvasEl.height = this.height

    this.canvas = _canvasEl
    this.ctx = _canvasEl.getContext('2d')
  }

  startGame() {
    this.then = 0

    this.playGame()
  }

  playGame() {
    if (this.ctx) {
      console.log('play?')
      this.ctx.clearRect(0, 0, this.width, this.height)

      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(this.width / 2 - 50, this.height / 2 - 50, 100, 100)
      this.ctx.fill()
    }

    const requestID = requestAnimationFrame(this.playGame)

    if (this.isCancel) {
      cancelAnimationFrame(requestID)
    }
  }
}
