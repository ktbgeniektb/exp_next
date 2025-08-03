import React from 'react'
import styles from "./style.module.scss"
import Link from "next/link"
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { Button } from '@mui/material';

const Post = ({name, date, content, link}) => {
  return (
    <div className={styles.post}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{content}</p>
      <p className={styles.link}>{link}</p>
    </div>
  )
}

export default Post
