import React from "react";

const Accrodion = ({items}) =>{

    const onTitleClick = (index) => {
        console.log('this title clicked',index);
    }
    const renderedItems = items.map((item) =>{
        return (
        <React.Fragment key={item.title}>
            <div className="title active" onClick={onTitleClick(item.title)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    })
    return (
       <div className="ui styled accordion">{renderedItems}</div>
    )
};
export default Accrodion;