'use client'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemContent from '@mui/joy/ListItemContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

export default function AccordionFilter({repertoires}) {
  const [index, setIndex] = React.useState(2);
    const composer = Object.keys(repertoires)
  return composer.map((c,i) => {
    const artist = c.split(':')[0]
    const desc = c.split(':')[1]
        return  <CssVarsProvider defaultMode="dark">
          <AccordionGroup
            variant="plain"  
            transition={{
              expanded: "0.2s ease",
            }}    
            sx={{
        // maxWidth: 400,
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
        expanded={i % 2 !== 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? i : null);
        }}
        >
        <AccordionSummary>
          <Avatar color="primary">
     {i}
          </Avatar>
          <ListItemContent>
            <Typography level="title-md">{artist}</Typography>
            <Typography level="body-sm">
              {desc}
            </Typography>
          </ListItemContent>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1.5}>
          
            {/* <FormControl orientation="horizontal" sx={{ gap: 1 }}>
            <FormLabel>Airplane Mode</FormLabel>
              <Switch size="sm" />
            </FormControl>
            <FormControl orientation="horizontal" sx={{ gap: 1 }}>
            <FormLabel>Airplane Mode</FormLabel>
              <Switch size="sm" />
            </FormControl> */}
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
                                          <Switch size="sm" />
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

    </AccordionGroup></CssVarsProvider>
  })
}
