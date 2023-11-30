import React from "react"
import { MenuLink } from "./helper/components"
import styles from './headers.module.css'

export function Links() {
  return (
    <div>
      <MenuLink route ='biography' />
      <MenuLink route ='repertoire' />
      <MenuLink route ='videos' />
      <MenuLink route ='contact' />
    </div>
  )
}