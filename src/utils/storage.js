import {createChromeStorageStateHookSync} from 'use-chrome-storage'
import {
  ANIME_GO,
  AUTOPLAY_EPISODE_NAME,
  FULLSCREEN_BIND,
  JUT_SU, NEXT_EPISODE_BIND,
  NEXT_EPISODE_NAME, PREV_EPISODE_BIND,
  SKIP_ENDING_NAME,
  SKIP_OPENING_NAME
} from './const'

const INITIAL_JUT_SU_VALUE = {
  [SKIP_OPENING_NAME]: true,
  [SKIP_ENDING_NAME]: true,
  [NEXT_EPISODE_NAME]: true,
  [AUTOPLAY_EPISODE_NAME]: true,
  [FULLSCREEN_BIND]: 70
}

const INITIAL_ANIME_GO_VALUE = {
  [AUTOPLAY_EPISODE_NAME]: true,
  [FULLSCREEN_BIND]: 70,
  [NEXT_EPISODE_BIND]: 68,
  [PREV_EPISODE_BIND]: 65,
}

export const validateKeyBind = (settings, currentKey, id) => {
  for (let key in settings) {
    if (key !== id && settings[key] === currentKey) {
      return false
    }
  }
  return true
}

export const changeStorage = (setSetting, key, value) => {
  setSetting(prevState => {
    return {
      ...prevState,
      [key]: value
    }
  })
}

export const useJutsuStore = createChromeStorageStateHookSync(JUT_SU, INITIAL_JUT_SU_VALUE)
export const useAnimegoStore = createChromeStorageStateHookSync(ANIME_GO, INITIAL_ANIME_GO_VALUE)