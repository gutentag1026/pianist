import React from "react"
import { BioLayout } from './BioLayout'
import Grid from '@mui/joy/Grid'

    const biography =[{key:1,content:"Talented pianist, Wendy performs in various occasions, such as luxury hotels(Shangrila West, St. Regis, The Longemont Shanghai), IP Mall, Residence of Consul General at the  Austrian Consulate General in Shanghai, Flower Expo in Chongming Island, Peace Lutheran in San Jose and many others."},
    {key:2,content:"A full-fleged pianist, as much in her broad repertoires as in her personal way of presenting the works of Chopin with genuinely poetic touch and the works of romantic period artist with deeply expressive intepretation and baroque with logic and energetic spirit."},{key:3,content:"2020 saw Aurora, the first neo-classic band started by Wendy. The band's members comes from 3 continents, 4 countries. With one vocal and guitarist, a keyboard, a bass and a drummer."}]


    async function getData() {
        return biography
      }
       

export default async function Bio() {
    const data = await getData()
    console.log('bio',process.browser ? 'client' : 'server')    
    return ( 
      <Grid container columns={24}>
      { data.map(bio => {
        return <Grid xs={24} md={12} lg={8} key={bio['key']}>
          <BioLayout bio={bio['content']}/>
        </Grid>
      })}
      </Grid>
    )
}