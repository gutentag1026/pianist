'use client'
import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import AspectRatio from '@mui/joy/AspectRatio';
import Grid from '@mui/joy/Grid'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import DisplayImage  from '../components/Image'

export default function Contact() {
  return <CssVarsProvider defaultMode="dark"><Grid container rowSpacing={4} columns={24}>
 <Grid xs={2}>
 </Grid>
 <Grid xs={7}>
  <Card variant="plain">
      <CardContent>
        <Typography level="title-md">Email:</Typography>
        <Typography>huanghuang5087@hotmail.com</Typography><br /><br /><br />
        <Typography level="title-md">Github:</Typography>
        <Typography>https://github.com/gutentag1026</Typography><br /><br /><br />
        <Typography level="title-md">Social media:</Typography>     <br />  
        <AspectRatio ratio="1" sx={{width:150}}><DisplayImage src='/contact/qr.png' fill={true} priority={true} /></AspectRatio>
      </CardContent>
  </Card>
 </Grid>


 </Grid></CssVarsProvider>
}