import React, {useState} from 'react'
import styles from './KeyBind.module.scss'
import {changeStorage} from '../../utils/storage'

const KeyBind = ({name, button, setSetting, id, settings}) => {
  const [isEdit, setIsEdit] = useState(false)

  const validateKeyBind = (settings, currentKey, id) => {
    for (let key in settings) {
      if (key !== id && settings[key] === currentKey) {
        return false
      }
    }
    return true
  }

  document.body.onkeyup = function(event) {
    if (isEdit && validateKeyBind(settings, event.keyCode, id)) {
      changeStorage(setSetting, id, event.keyCode)
      setIsEdit(false)
    }
  }

  return (
    <div className={styles.keyBind} >
      <div className={styles.currentKey} onDoubleClick={() => setIsEdit(true)}>
        <div>{isEdit ? '' : button }</div>
      </div>
      <div className={styles.name}>{isEdit ? 'Нажмите нужную кнопку' : name  }</div>
    </div>
  )
}

export default KeyBind