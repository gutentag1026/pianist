import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ minWidth:1200, height: '75vh', overflow: 'hidden', position: 'relative'}}>
      <ImageList sx={{position:'absolute',top:0, left:0, bottom:'-31px', right:'-15px', overflow:'scroll'}} variant="woven" cols={5} gap={8}>
        {itemData.map((item) => {
            return <ImageListItem key={item.key}>
            <img
              srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?fit=crop&auto=format`}
              loading="lazy"
            />
            <ImageListItemBar 
                title={item.title}
                subtitle={item.subtitle}/>
          </ImageListItem>
        })}
      </ImageList>
    </Box>
  );
}
const itemData = [
    {key:1,img:"/img/spa2.jpg", title:'Shimao Riviera', subtitle:'Lujiazui'},

    {key:2,img:"/img/IP Mall.png",title:'IP Mall', subtitle:'Banquet in loving memory of Teresa Teng'},

    {key:3,img:"/img/drawing room side.jpg", title:'St Regis', subtitle:'Jingan'},
    {key:4,img:"/img/St Regis.jpg"},
    {key:7,img:"/img/st regis grand.jpg"},
    {key:5,img:"/img/shangrila side.jpg"},
    {key:6,img:"/img/drawing room.png"},
   
    {key:8,img:"/img/tea.jpg"},
    {key:9,img:"/img/spa1.jpg"},
    {key:10,img:"/img/band.jpg"},
    {key:11,img:"/img/shangrila.jpg"},
    {key:12,img:"/img/home.jpg"},
];