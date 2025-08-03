import React from 'react'
import styles from "./style.module.scss"
import Link from "next/link"
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const Signup = () => {
  return (
    <div className={styles.form}>
        <h3 className={styles.form__title}>アカウントを作成</h3>

  <div className={styles.form__item}>
        <label htmlFor="">お名前</label>
        <input type="text" placeholder="名前を入力してください" />
      </div>

  <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="text" placeholder="メールアドレスを入力してください" />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" placeholder="パスワードを入力してください" />
      </div>
    <button className={styles.form__btn}>
        <AudiotrackIcon color='primary'/>
        ログイン
    </button>
    </div>
  )
}

export default Signup
