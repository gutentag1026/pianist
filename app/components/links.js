import React from "react"
import { MenuLink } from "./helper/components"
import styles from './link.module.css'

export function Links() {
  return (
    <div className={styles['menu']}>
      <MenuLink route ='biography' />
      <MenuLink route ='repertoire' />
      <MenuLink route ='videos' />
      <MenuLink route ='contact' />
    </div>
  )
}