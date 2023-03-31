import React, { useState } from 'react';

const LikeButton = (props) => {
    function handleClick(){

    }
    return ( 
        <div>
<LikeButton className="inactive" onClick={handleClick}>{props.likedStatus}</LikeButton>        
        </div>
     );
}
 
export default LikeButton;