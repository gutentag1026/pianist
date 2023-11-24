'use client'
import React from "react";
import {Link} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { captalizeFirstLetter } from './functions'
import styles from './helper.module.css'

export const MenuLink = ({route}) => {
    const pathname = usePathname()
  
    return (
      <div>
        <Link color="foreground" className={styles[`${pathname === `/${route}` ? 'active' : ''}`]} href={`/${route}`}>
          {captalizeFirstLetter(route)}
        </Link>
      </div>
    )
}