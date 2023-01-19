import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basic/First'

const el = document.getElementById('root')

const tag = <strong>Hey React!</strong>
ReactDOM.render(
    <div>
        { tag }
        <br />
        <First></First>
    </div>, 
    el
)