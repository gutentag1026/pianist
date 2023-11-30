'use client'
import React from 'react';
import Grid from '@mui/joy/Grid'
import { Links } from './links'
import DisplayImage from './Image'
import { usePathname } from 'next/navigation'
import TitlebarBelowMasonryImageList from './MasonryImage'
import SSRMasonry from './SSR'
import Image from 'next/image'
import styles from './headers.module.css'

export default function Headers() {
    const pathname = usePathname()
    return ( 
      <Grid container rowSpacing={4} columns={24} className={styles['header']}>
   
 
         {/* <DisplayImage className={styles['poster']} src="/img/IP Mall.png" fill={true} priority={true}/> */}
        <Grid xs={2} className={styles['menu']}>
            <Links/>
        </Grid>
        <Grid xs={22} className={styles['red']}>
            { pathname === '/biography' ? <TitlebarBelowMasonryImageList /> : null }
        </Grid>
      </Grid>
    );
}