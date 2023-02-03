import React, { useState } from 'react'
import styles from './KeyBind.module.scss'
import { changeStorage, validateKeyBind } from '../../utils/storage'

const KeyBind = ({ name, button, setSetting, id, settings }) => {
  const [isEdit, setIsEdit] = useState(false)

  document.body.onkeyup = function (event) {
    if (isEdit && validateKeyBind(settings, event.keyCode, id) && event.keyCode !== 70) {
      changeStorage(setSetting, id, event.keyCode)
      setIsEdit(false)
    }
  }

  return (
    <div className={styles.keyBind}>
      <div className={styles.currentKey} onDoubleClick={() => setIsEdit(true)}>
        <div>{isEdit ? '' : button}</div>
      </div>
      <div className={styles.name}>{isEdit ? 'Нажмите нужную кнопку' : name}</div>
    </div>
  )
}

export default KeyBind
