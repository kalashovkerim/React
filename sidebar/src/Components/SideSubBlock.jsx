import React from 'react';
import classes from "../Styles/SideBlock.module.css";
import Topics from "../topics.json";
import SideBlock from "./SideBlock";

function SideSubBlock(props) {

    return (
        <div>
            {Topics.topics.map(item => (
                <div key={item.subtopics.id} className={classes.block}>
                    <p>{item.subtopics.name}</p>
                </div>
            )) /*problem*/}
        </div>
    );
}

export default SideSubBlock;