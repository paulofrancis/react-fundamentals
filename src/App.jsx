import React from "react";

import First from './components/basic/First'
import WithParam from './components/basic/WithParam'
import Fragment from './components/basic/Fragment'
import RandomNumber from "./components/basic/RandomNumber";

export default _ =>
    <div id='app'>
        <h1>React Fundamentals</h1>
        <h3>Classes</h3>
        <hr />
        <RandomNumber
            min={1}
            max={60} />
        <hr />
        <Fragment />
        <hr />
        <WithParam
            title='This is my title'
            subtitle='This is a subtitle' />
        <hr />
        <First></First>
    </div>
