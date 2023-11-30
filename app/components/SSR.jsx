import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Image from 'next/image';

const imgs = [
    {key:1,src:"/img/spa2.jpg"},
    {key:2,src:"/img/drawing room.png"},
    {key:3,src:"/img/drawing room side.jpg"},
    {key:4,src:"/img/St Regis.jpg"},
    {key:5,src:"/img/Aurora.jpeg"},
    {key:6,src:"/img/band.jpg"},
    {key:7,src:"/img/home.jpg"},
    {key:8,src:"/img/tea.jpg"},
    {key:9,src:"/img/spa1.jpg"},
    {key:10,src:"/img/IP Mall.png"},
    {key:11,src:"/img/shangrila.jpg"}
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SSRMasonry() {

  return (
    <Box xs={{ width: 1408, minHeight: '70vh'}}>
      <Masonry
        columns={6}
        spacing={3}
        // defaultHeight={450}
        // defaultColumns={4}
        // defaultSpacing={2}
      >
        {imgs.map((img, index) => (
            <div key={img.key}>
           <img
                srcSet={`${img.src}?w=162&auto=format&dpr=2 2x`}
                src={`${img.src}?w=162&auto=format`}
                loading="lazy"
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
           }}
         /></div>
        ))}
      </Masonry>
    </Box>
  );
}