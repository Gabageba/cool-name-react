import React from 'react'
import Input from '../../components/Input/Input'
import styles from './AnimeGo.module.scss'
import KeyBind from '../../components/KeyBind/KeyBind'
import {useAnimegoStore} from '../../utils/storage'
import {AUTOPLAY_EPISODE_NAME, FULLSCREEN_BIND, NEXT_EPISODE_BIND, PREV_EPISODE_BIND} from '../../utils/const'
import {keyValidator} from '../../utils/keyCodes'

const AnimeGo = () => {
  const [settings, setSettings, isPersistent, error] = useAnimegoStore()

  return (
    <div className={styles.animeGo}>
      <Input id={'autoplayEpisode'} name={'Автопроигрывание серии'} setting={settings[AUTOPLAY_EPISODE_NAME]} setSetting={setSettings}/>
      <div className={'line'}/>
      <KeyBind button={keyValidator(settings[FULLSCREEN_BIND])} name={'Открытие в полноэкранном режиме'} setSetting={setSettings} id={FULLSCREEN_BIND} settings={settings}/>
      <KeyBind button={keyValidator(settings[NEXT_EPISODE_BIND])} name={'Открыть следующую серию'} setSetting={setSettings} id={NEXT_EPISODE_BIND} settings={settings}/>
      <KeyBind button={keyValidator(settings[PREV_EPISODE_BIND])} name={'Открыть предыдущую серию'} setSetting={setSettings} id={PREV_EPISODE_BIND} settings={settings}/>
    </div>
  )
}

export default AnimeGo