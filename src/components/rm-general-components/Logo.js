import React from 'react';

function Logo({logoPath}) {
    return(
        <React.Fragment>
            <img src={logoPath} alt={logoPath}/>
        </React.Fragment>
    )
}


export default Logo