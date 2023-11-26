import React from "react";
import { Button } from "@nextui-org/react";
import styles from './page.module.css';

    const biography = ["Talented pianist, Wendy performs in various occasions, such as luxury hotels(Shangrila West, St. Regis, The Longemont Shanghai), \
    Residence of Consul General at the  Austrian Consulate General in Shanghai, Flower Expo in Chongming Island, Peace Lutheran in San Jose and many others.","A full-fleged pianist, as much in her broad repertoires as in her personal way of \
    presenting the works of Chopin with genuinely poetic touch and the works of romantic period artist with deeply expressive intepretation and baroque with logic and energetic spirit."]


    async function getData() {
        // const res = await fetch('https://api.example.com/...')
        // // The return value is *not* serialized
        // // You can return Date, Map, Set, etc.
       
        // if (!res.ok) {
        //   // This will activate the closest `error.js` Error Boundary
        //   throw new Error('Failed to fetch data')
        // }
       
        return biography
      }
       

export default async function Bio() {
    const data = await getData()
    
    return ( 
    <div className={styles["bio"]}>
    {data.map(bio => {return <p>{bio}</p>})}
    </div>
  );
}