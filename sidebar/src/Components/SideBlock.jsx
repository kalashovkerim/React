import React, {useState} from 'react';
import classes from "../Styles/SideBlock.module.css";
import Topics from "../topics.json"
import SideSubBlock from "./SideSubBlock";
function SideBlock(props) {

    const [access,setAccess] = useState(false)
    function ShowTopics(cuId) {
        setAccess((prevAccess) => !prevAccess);
    }

        return (
            <div onClick={() => ShowTopics(props.cuId)} className={classes.block}>
                <p>{props.name}</p>
                {access ? <SideSubBlock topId={props.cuId}/> : null}
            </div>
        );

}

export default SideBlock;