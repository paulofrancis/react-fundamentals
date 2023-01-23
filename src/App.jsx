import React from "react";

import First from './components/basic/First'
import WithParam from './components/basic/WithParam'
import Fragment from './components/basic/Fragment'

export default _ =>
    <div id='app'>
        <h1>React Fundamentals</h1>
        <Fragment />
        <WithParam
            title='This is my title'
            subtitle='This is a subtitle' />
        <First></First>
    </div>
