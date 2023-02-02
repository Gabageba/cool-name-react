import React from 'react'
import styles from './Jutsu.module.scss'
import Input from '../../components/Input/Input'
import KeyBind from '../../components/KeyBind/KeyBind'
import {useJutsuStore} from '../../utils/storage'
import {AUTOPLAY_EPISODE_NAME, NEXT_EPISODE_NAME, SKIP_ENDING_NAME, SKIP_OPENING_NAME} from '../../utils/const'

const Jutsu = () => {

  const [settings, setSettings, isPersistent, error] = useJutsuStore()

  console.log(settings)
  return (
    <div className={styles.jutsu}>
      <Input id={SKIP_OPENING_NAME} name={'Автопропуск опенинга'} setting={settings[SKIP_OPENING_NAME]} setSetting={setSettings}/>
      <Input id={SKIP_ENDING_NAME} name={'Автопропуск эндинга'}  setting={settings[SKIP_ENDING_NAME]} setSetting={setSettings}/>
      <Input id={NEXT_EPISODE_NAME} name={'Автозапуск следующей серии'} setting={settings[NEXT_EPISODE_NAME]} setSetting={setSettings}/>
      <Input id={AUTOPLAY_EPISODE_NAME} name={'Автопроигрывание серии'} setting={settings[AUTOPLAY_EPISODE_NAME]} setSetting={setSettings}/>
      <div className={'line'}/>
      <KeyBind button={'f'} name={'Открытие в полноэкранном режиме'}/>
    </div>
  )
}

export default Jutsu