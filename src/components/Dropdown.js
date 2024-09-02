import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({options, selected , onSelectedChange, lable}) =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() =>{
        const onBodyClick = (event) =>{
            if(ref.current.contains(event.target)){
                return ;
            }
            setOpen(false);
        }
        document.body.addEventListener('click',onBodyClick);

        return () =>{
            document.body.removeEventListener('click', onBodyClick);
        }
    },[]);

    const optionVlue = options.map((item) =>{
        if(item.value === selected.value){
            return null;
        }
        return (
            <div key={item.value} className="item" onClick={() =>{onSelectedChange(item)}}> 
                {item.label}
            </div>
        )
    });
    return(
        <>
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{lable}</label>
                <div onClick={() =>{setOpen(!open)}} className={`ui selection dropdown visible active ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{optionVlue}</div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Dropdown;