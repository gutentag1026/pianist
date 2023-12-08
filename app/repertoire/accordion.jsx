'use client'
import React, { useContext, useEffect } from 'react';
import AddProgram from './Icon';
import { ProgramContext } from '../Provider';
import { CssVarsProvider } from '@mui/joy/styles';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/joy/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/joy/AccordionSummary';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
// import Icon from '@mui/material/Icon';
export default function AccordionFilter({repertoires}) {
  const [index, setIndex] = React.useState(0)
  const pgContext = useContext(ProgramContext)
  const {items, onProgramChange} = pgContext
  const composer = Object.keys(repertoires)
  useEffect(()=>{
    console.log('accordian',items)
  },[items])
  return composer.map((c,i) => {
    const artist = c.split(':')[0]
    const desc = c.split(':')[1]
        return  <CssVarsProvider defaultMode="dark">
                      <AccordionGroup
                        variant="outlined"  
                        sx={{
                              maxWidth: 800,
                              margin:'0 auto',
                              borderRadius: 'md',
                              [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                                {
                                  paddingBlock: '1rem',
                                },
                              [`& .${accordionSummaryClasses.button}`]: {
                                paddingBlock: '1rem',
                              },
                      }}
                >
                  <Accordion  
                    expanded={index === i}
                    onChange={(event, expanded) => {
                      setIndex(expanded ? i : null);
                    }}
                    >
                    <AccordionSummary>
                    <Avatar alt={artist} src={`/composer/${artist}.jpeg`} size="lg" />
                      <ListItemContent>
                        <Typography level="title-md">{artist}</Typography>
                        <Typography level="body-sm">
                          {desc}
                        </Typography>
                      </ListItemContent>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={1.5}>
                      { 
                            Object.keys(repertoires[c]).map(genre => {            
                                return <List key={genre}>{genre}
                                {
                                  repertoires[c][genre].map(work => {
                                    {
                                          return <ListItem key={Object.keys(work)} nested>
                                              <ListItem>{Object.keys(work)}</ListItem>
                                              <List marker="circle">
                                                {
                                                  work[Object.keys(work)].map(piece=>{
                                                    return <FormControl orientation="horizontal" sx={{ gap: 1 }}>
                                                      <FormLabel key={piece} size='sm'>{piece}</FormLabel>
                                                      <AddProgram piece={piece} onProgramChange={onProgramChange} action="ADD" />
                                                      </FormControl>
                                                  })
                                                }
                                              </List>
                                          </ListItem>
                                    }
                                  })
                                }
                              </List>
                          })
                        } 
                        
                      </Stack>
                    </AccordionDetails>
                  </Accordion>

                      </AccordionGroup>
                </CssVarsProvider>
  })
}
