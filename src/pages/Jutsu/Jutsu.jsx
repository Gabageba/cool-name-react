import React from 'react'
import styles from './Jutsu.module.scss'
import Input from '../../components/Input/Input'
import KeyBind from '../../components/KeyBind/KeyBind'

const Jutsu = () => {
  return (
    <div className={styles.jutsu}>
      <Input id={'skipOpening'} name={'Автопропуск опенинга'}/>
      <Input id={'skipEnding'} name={'Автопропуск эндинга'}/>
      <Input id={'nextEpisode'} name={'Автозапуск следующей серии'}/>
      <Input id={'autoplayEpisode'} name={'Автопроигрывание серии'}/>
      <div className={'line'}/>
      <KeyBind button={'f'} name={'Открытие в полноэкранном режиме'}/>
    </div>
  )
}

export default Jutsu