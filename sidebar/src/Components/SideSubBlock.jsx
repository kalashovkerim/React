import React from 'react';
import classes from "../Styles/SideBlock.module.css";
import Topics from "../topics.json";
import SideBlock from "./SideBlock";

function SideSubBlock(props) {


    const desiredTopic = Topics.topics.find(topic => topic.id === props.topId);
    const subtopics = desiredTopic.subtopics;


    function SubHandler(text)
    {
        console.log(text);
    }

    return (
        <div>
            {subtopics.map(subtopic => (
                <div onClick={() => SubHandler(subtopic.name)} key={subtopic.id} className={classes.sublock}>
                    <p>{subtopic.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SideSubBlock;