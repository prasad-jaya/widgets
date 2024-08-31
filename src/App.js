import React from "react";

import Accrodion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript Framework'
    },  
    {
        title: 'why use React?',
        content: 'React is a front end javascript Framework'
    },
    {
        title: 'How do you use React',
        content: 'React is a front end javascript Framework'
    },
]

export default () => {
    return (
        <div>
            {/* <Accrodion items={items}/> */}
            <Search/>
        </div>
    )
};