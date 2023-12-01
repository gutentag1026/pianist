import React from "react"
import { MongoClient } from "mongodb";
// import { run } from "../db/database"
import parse from 'html-react-parser'
import MarkerList from './list'
import AccordionFilter from './accordion'
import styles from '../biography/page.module.css'

const repertoires = 
    {
        "Frédéric Chopin:Frédéric François Chopin was a Polish composer and virtuoso pianist of the Romantic period, who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era, one whose \"poetic genius was based on a professional technique that was without equal in his generation\". ":
                            {
                                    "Ballades": [
                                            {"Op. 23": ["Ballade No. 1 in G minor (composed 1835–36) 09:12"]}
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
                            },
        "Ludwig van Beethoven:Ludwig van Beethoven was a German composer and pianist. Beethoven remains one of the most admired composers in the history of Western music; his works rank among the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music.":
                            {
                                    "Piano sonatas": [
                                        { "Op.13": ["No.8 'Pathétique' in C minor"] },
                                        {"Op. 27, No. 2": ["No.14 'Moonlight' in C sharp minor"]}
                                    ],
                                    "misc":[
                                        {"WoO 59, Bia 515":[" Bagatelle No. 25 'Für Elise' in A minor"]}
                                    ]
                            },
        "Wolfgang Amadeus Mozart:Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period. Despite his short life, his rapid pace of composition resulted in more than 800 works of virtually every genre of his time.":
                            {
                                    "Piano sonatas": [
                                        { "K. 545": ["No.16 in C major"] },
                                        { "K. 331 / 300i": ["No.11 in A major, Alla turca"]}
                                    ]
                            },
        "Claude Debussy:Claude Debussy was a French composer. He is sometimes seen as the first Impressionist composer, although he vigorously rejected the term. He was among the most influential composers of the late 19th and early 20th centuries.":
                            {
                                    "Suite bergamasque":[
                                        {"L. 75": ["No.3 Clair de lune"]}
                                    ]
                            },
        "Johann Sebastian Bach:Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his orchestral music such as the Brandenburg Concertos; instrumental compositions such as the Cello Suites; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schubler Chorales and the Toccata and Fugue in D minor; and vocal music such as the St Matthew Passion and the Mass in B minor. Since the 19th-century Bach revival, he has been generally regarded as one of the greatest composers in the history of Western music.":
                            {
                                "Goldberg Variations":[
                                    {"BWV 988": ["Aria","Variatio 1. a 1 Clav.","Variatio 2. a 1 Clav.","Variatio 3. Canone all'Unisono. a 1 Clav.","Variatio 4. a 1 Clav.","Variatio 5. a 1 ô vero 2 Clav.","Variatio 6. Canone alla Seconda. a 1 Clav.","Variatio 7. a 1 ô vero 2 Clav. al tempo di Giga","Variatio 8. a 2 Clav.","Variatio 9. Canone alla Terza. a 1 Clav.","Variatio 10. Fughetta. a 1 Clav."]}
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
    const res = await cursor.toArray();
    return res[0]
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
    // const repertoires = await getRepertoires()
    // insertRepertoires().catch(console.dir)
    // const template = generateTemplate({'Frédéric Chopin': repertoires['Frédéric Chopin']})
    // const template = generateTemplate(repertoires)
    return <>
    <AccordionFilter repertoires={repertoires}/>
    {/* <MarkerList repertoires={repertoires} /> */}
    </>
}
