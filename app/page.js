import * as React from "react"
import DisplayImage from './components/Image'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  //console.log('process',process.browser ? 'client' : 'server','MONGODB_URI',process.env.MONGODB_URI)
  return (
    <div className={styles.main}>
      <div className={styles.desc}>
        <DisplayImage className={styles.pic} src="/img/Yulan Huang.jpg" fill={true} priority={true} />
      </div>
      <div className={styles.desc}></div>
      <div className={styles.desc}></div>
      <div className={styles.desc}></div>
    </div>
  )
}
