import * as Bowser from "bowser"

export const greenModalNumberStrings = ['1', '2']

export const blueModalNumberStrings = ['2', '3']

export const redModalNumberStrings = ['1', '3']

export const bowserParsed = () => {
  const parsed = Bowser.parse(window.navigator.userAgent)
  return parsed. platform.type
}

export const isTablet = () => {
  return navigator.maxTouchPoints > 1
}