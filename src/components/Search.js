import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () =>{
    const [term, setTerm] = useState('playground');
    const [results, setResults] = useState([]);

    useEffect(() =>{
        const search = async () =>{
            try{
                const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                    params:{
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });
               
                setResults(data.query.search);
            }catch(error){
                console.log(error);
            } 
        };

        const timeoutId = setTimeout(() => {
                search();
            }, 500);
        
       return (() =>{
        clearInterval(timeoutId);
       });
    }, [term]);

    const renderdResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="title">
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </div>
        )
    });
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                    {renderdResults}
                </div>
        </div>
    );
};

export default Search;





