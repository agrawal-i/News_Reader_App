import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

 const App = () => {

    useEffect(() => {
        alanBtn()
    },[])
return (
    <div> 
        <h1> Alan AI NEWS Application</h1>
    </div>
);
 
 }
 export default App;

