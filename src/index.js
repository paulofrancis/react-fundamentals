import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const el = document.getElementById('root')

const tag = <strong>Hey React!</strong>
ReactDOM.render(
    <div id='app'>
        { tag }
        <br />
        <App />
    </div>, 
    el
)