import React, { useState } from 'react';

const DislikeButton = (props) => {
    const [dislikeButtonClass, setDislikeButtonClass] = useState("inactive");
    function handleClick(){
        if (dislikeButtonClass === "inactive"){
            setDislikeButtonClass("active");
        }
        else{
            setDislikeButtonClass("inactive");
        }
    }
    
    return ( 
        <div>
<button type="Dislike" class={dislikeButtonClass} onClick={handleClick}>{props.dislikedStatus}</button>        
        </div>
     );
}
 
export default DislikeButton;