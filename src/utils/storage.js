import {createChromeStorageStateHookSync} from 'use-chrome-storage'
import {
  AUTOPLAY_EPISODE_NAME,
  FULLSCREEN_BIND,
  JUT_SU,
  NEXT_EPISODE_NAME,
  SKIP_ENDING_NAME,
  SKIP_OPENING_NAME
} from './const'

const INITIAL_JUT_SU_VALUE = {
  [SKIP_OPENING_NAME]: true,
  [SKIP_ENDING_NAME]: true,
  [NEXT_EPISODE_NAME]: true,
  [AUTOPLAY_EPISODE_NAME]: true,
  [FULLSCREEN_BIND]: 'KeyF'
};

export const changeStorage = (setSetting, key, value) => {
  setSetting(prevState => {
    return {
      ...prevState,
      [key]: value
    };
  });
}

export const useJutsuStore = createChromeStorageStateHookSync(JUT_SU, INITIAL_JUT_SU_VALUE);