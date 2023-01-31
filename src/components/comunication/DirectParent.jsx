import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild name='Paulo Francis' age={34} nerd={false}></DirectChild>
            <DirectChild name='Guedes' age={31} nerd={true}></DirectChild>
        </div>
    )
}