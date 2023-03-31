import React, { useState } from 'react';

const LikeButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");
    function handleClick(){
        if (buttonClass === "inactive"){
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive");
        }

    }
    return ( 
        <div>
<button type= "Like" class={buttonClass} onClick={handleClick}>{props.likedStatus}</button>        
        </div>
     );
}
 
export default LikeButton;