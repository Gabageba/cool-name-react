import React from 'react'
import Input from '../../components/Input/Input'
import styles from './AnimeGo.module.scss'
import KeyBind from '../../components/KeyBind/KeyBind'

const AnimeGo = () => {
  return (
    <div className={styles.animeGo}>
      <Input id={'autoplayEpisode'} name={'Автопроигрывание серии'}/>
      <div className={'line'}/>
      <KeyBind button={'f'} name={'Открытие в полноэкранном режиме'}/>
      <KeyBind button={'D'} name={'Открыть следующую серию'}/>
      <KeyBind button={'A'} name={'Открыть предыдущую серию'}/>
    </div>
  )
}

export default AnimeGo