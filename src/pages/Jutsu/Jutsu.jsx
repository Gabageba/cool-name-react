import React from 'react'
import styles from './Jutsu.module.scss'
import Input from '../../components/Input/Input'

const Jutsu = () => {
  return (
    <div className={styles.jutsu}>
      <Input id={'skipOpening'} name={'Автопропуск опенинга'}/>
      <Input id={'skipEnding'} name={'Автопропуск эндинга'}/>
      <Input id={'nextEpisode'} name={'Автозапуск следующей серии'}/>
      <Input id={'autoplayEpisode'} name={'Автопроигрывание серии'}/>
    </div>
  )
}

export default Jutsu