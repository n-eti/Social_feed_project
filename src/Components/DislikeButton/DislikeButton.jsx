import React, { useState } from 'react';

const DislikeButton = (props) => {
    function handleClick(){

    }
    
    return ( 
        <div>
<Button className="inactive" onClick={handleClick}>{props.dislikedStatus}</Button>        
        </div>
     );
}
 
export default DislikeButton;