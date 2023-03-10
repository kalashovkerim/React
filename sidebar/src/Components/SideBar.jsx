import React from 'react';
import classes from "../Styles/SideBar.module.css";
import SideBlock from "./SideBlock";
import Topics from "../topics.json";
function SideBar(props) {
    return (
        <div className={classes.bg}>
            <div className={classes.side}>
                {Topics.topics.map(item => (
                <SideBlock key={item.id} name={item.name} cuId ={item.id}/>
                ))}
            </div>
        </div>
    );
}

export default SideBar;