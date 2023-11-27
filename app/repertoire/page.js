import React from "react"
import { MongoClient } from "mongodb";
// import { run } from "../db/database"
import parse from 'html-react-parser'
import styles from '../biography/page.module.css'

const repertoires = 
    {
        "Frédéric Chopin":
                            {
                                    "Ballades": [
                                            {"Op. 23": ["Ballade No. 1 in G minor (composed 1835–36)"]}
                                    ], 
                                    "Nocturnes": [
                                            {"Op. 9 (1830–32):": [ "Nocturne in B♭ minor", "Nocturne in E♭ major"]}, 
                                            {"Op. 55 (1843–44):": ["Nocturne in F minor"]},
                                            {"Op. posth. (1830):": [ "Nocturne in C♯ minor"]}, 
                                    ],
                                    "Waltzes": [
                                        {"Op. 34, Trois grandes valses brillantes:": ["Waltz in A♭ major (1835)", "Waltz in A minor (1831)", "Waltz in F major (1838)"]},
                                        {"Op. 42:": ["Waltz in A♭ major (1840)"]},
                                        {"Op. 64:": ["Waltz in D♭ major (Minute Waltz) (1847)", "Waltz in C♯ minor (1847)"]},
                                        {"1852: Two Waltzes, Op. posth. 69:": ["Waltz in A♭ major, L'Adieu (1835; WN 47)", "Waltz in C♯ minor (1847)"]},
                                        {"1855: Three Waltzes, Op. posth. 70:": ["Waltz in F minor (1841; WN 55)","Waltz in D♭ major (1829; WN 20)"]},
                                        {"Without opus number" : ["1868: Waltz in E minor (1830), B. 56, KK IVa/15, P. 1/15, WN 29", "1871–72: Waltz in E major (c. 1830), B. 44, KK IVa/12, P. 1/12, WN 18","1902: Waltz in A♭ major, B. 21, KK IVa/13, P. 1/13, WN 28","Waltz in A minor"]}

                                    ]
                            }
    }

const generateTemplate = (repertoires) => {
    let templates = `<div className={${styles["bio"]}}>`
    for (const [composer, repo] of Object.entries(repertoires)) {
        //console.log('composer',composer, 'repo',repo)
        templates += `<h2>${composer}</h2>`
        for (const [genre, pieces] of Object.entries(repo)) {
            //console.log('genre',genre, 'piece',pieces)
            templates += `<h3>${genre}</h3>`
            pieces.forEach((piece) => {
            for (const [opus, works] of Object.entries(piece)) {
                //console.log('opus',opus, 'works',works)
                templates += `<h4>${opus}</h4>`
     
                    works && works.length && works.forEach(m => {
                         templates += `<li>${m}</li>`
                     })      
                    
            }
        })
        }
    }
    templates += `</div>`
    return templates
}

async function getData(){
    return repertoires
}

async function getRepertoires() {
    
  const client = new MongoClient("mongodb+srv://huanghuang5087:jA34ChhD8TShRNDF@cluster0.pjerkr2.mongodb.net/?retryWrites=true&w=majority");
  try {

    // Get the database and collection on which to run the operation
    const database = client.db("pianist");
    const repertoire = database.collection("repertoires");
    //console.log(repertoire)
    const cursor = repertoire.find()
   // iterate code goes here
    await cursor.forEach(console.log);
    // Create an array of documents to insert
    // const doc = repertoires

    // // Execute insert operation
    // const result = await repertoire.insertOne(doc)
   
    // // Print result
    // console.log(`${result.insertedCount} documents were inserted`);
  }
  catch(e){
    console.log(e) 
  }
}

export default async function repertoire() {
    //const repertoires = await getRepertoires()
    const repertoires = await getData()
    // insertRepertoires().catch(console.dir)
    const template = generateTemplate(repertoires)
    return parse(template)
}
