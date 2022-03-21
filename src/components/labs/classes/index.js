import React from "react";
import './index.css';

const Classes = () => {
    const dangerous = true;
    return (
        <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                                wd-fg-black wd-padding-10px`}>
            Dangerous background</div>

    )
};
export default Classes;
