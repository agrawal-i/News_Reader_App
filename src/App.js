import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '7408951129dc3c5e5b579565073c5c292e956eca572e1d8b807a3e2338fdd0dc/stage';

 const App = () => {
    const [newsArticles , setNewsArticles]= useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
    },[])
return (
    <div> 
        <h1> Alan AI NEWS Application</h1>
        <NewsCards articles= {newsArticles}/>
    </div>
);
 
 }
 export default App;

