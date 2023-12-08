
'use client'
import React, {useContext, useEffect} from 'react';
import AddProgram from './Icon';
import { ProgramContext } from '../Provider';
import { CssVarsProvider } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import styles from './repertoire.module.css'

export default function MarkerList() {
  const pgContext = useContext(ProgramContext)
  const { items, onProgramChange } = pgContext
  useEffect(()=>{
    console.log('MarkerList',items)
  },[items])
  
return <CssVarsProvider defaultMode="dark"><List>{items.map((piece,i)=>{
  return  <ListItem key={piece+i}>{piece}<AddProgram piece={piece} onProgramChange={onProgramChange} action="REMOVE" /></ListItem>
})}</List></CssVarsProvider>
    // const composer = Object.keys(repertoires)
    // // console.log(Object.keys(repertoires[composer]))
    // return composer.map(c => {
    //   return <CssVarsProvider defaultMode="dark">
    //           <List>
    //             <ListItem key={c}>{c}</ListItem>
    //             { 
    //               Object.keys(repertoires[c]).map(genre => {
    //                 return <List key={genre}>{genre}
    //                 {
    //                   repertoires[c][genre].map(work => {
    //                     {
    //                           return <ListItem key={Object.keys(work)} nested>
    //                                     <ListItem>{Object.keys(work)}</ListItem>
    //                                     <List marker="circle">
    //                                       {
    //                                         work[Object.keys(work)].map(piece=>{
    //                                           return <ListItem key={piece} size='sm'>{piece}</ListItem>
    //                                         })
    //                                       }
    //                                     </List>
    //                                 </ListItem>
    //                     }
    //                   })
    //                 }
    //               </List>
    //           })
    //         }
    //       </List>
    //     </CssVarsProvider>
    // })
}