import React, { useEffect, useState } from "react";
import axios from "axios";


const Convert = ({language, text}) =>{
    const [translated , setTranslated] = useState('');
    useEffect(() =>{
        const doTranslation  = async () =>{
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
               }
            );
           
            setTranslated(data.data.translations[0].translatedText);
        };
        const timeout = setTimeout(() => {
            doTranslation();       
        }, 500);
        return () =>{clearInterval(timeout)}
    },[language, text])
    return(
        <>
        <div>
            <h1>{translated}</h1>
        </div>
        </>
    )
}

export default Convert;