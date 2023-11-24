import {connectToDataBase}  from "../db/database"


export const GET = async (request) => { 
    try {
      await connectToDataBase();    
      console.log('GET')  
    } catch (error) {
      console.log('error',error)
    }
}

export default function Contact() {
    GET()
   return <h1>Contact</h1>
}