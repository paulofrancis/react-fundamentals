import './App.css'
import React from "react";

import First from './components/basic/First'
import WithParam from './components/basic/WithParam'
import Fragment from './components/basic/Fragment'
import RandomNumber from "./components/basic/RandomNumber";
import Card from "./components/layout/Card";
import Family from './components/basic/Family';
import FamilyMember from './components/basic/FamilyMember';
import StudentList from './components/repetition/StudentList';

export default _ =>
    <div className='app'>
        <h1>React Fundamentals</h1>
        <h3>Classes</h3>

        <div className="cards">

            <Card title='#07 Repetition' color='#f6cd61 '>
                <StudentList></StudentList>
            </Card>

            <Card title='#06 Component with children' color='#00c8f8'>
                <Family surname='Silva'>
                    <FamilyMember name='Paulo' />
                    <FamilyMember name='João' />
                    <FamilyMember name='Ana' />
                </Family>
            </Card>

            <Card title='#05 Card component' color='#fa6900'>This is a content.</Card>

            <Card title='#04 Randon Number' color='#e94c6f'>
                <RandomNumber
                    min={1}
                    max={60} />
            </Card>

            <Card title='#03 Fragment' color='#e8b71a'>
                <Fragment />
            </Card>

            <Card title='#02 Component With Param' color='#588c73'>
                <WithParam
                    title='This is my title'
                    subtitle='This is a subtitle' />
            </Card>

            <Card title='#01 My First Component' color='#aa6900'>
                <First></First>
            </Card>
        </div>

    </div>
