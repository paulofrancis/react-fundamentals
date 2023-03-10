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
import ProductsTable from './components/repetition/ProductsTable';
import EvenOrOdd from './components/condition/EvenOrOdd';
import UserInfo from './components/condition/UserInfo';
import DirectParent from './components/comunication/DirectParent';
import IndirectParent from './components/comunication/IndirectParent';
import Input from './components/form/Input';
import Counter from './components/counter/Counter';
import Lottery from './components/lottery/Lottery';

export default _ =>
    <div className='app'>
        <h1>React Fundamentals</h1>
        <h3>Classes</h3>

        <div className="cards">

            <Card title='#14 Loterry' color='#96ceb4'>
                <Lottery quantity={7}></Lottery>
            </Card>

            <Card title='#13 Counter' color='#1e1f26'>
                <Counter numberInit={10}></Counter>
            </Card>

            <Card title='#12 Controlled Component' color='#ee4035'>
                <Input></Input>
            </Card>

            <Card title='#11 Indirect Comunication' color='#0392cf'>
                <IndirectParent></IndirectParent>
            </Card>

            <Card title='#10 Direct Comunication' color='#fdf498'>
                <DirectParent></DirectParent>
            </Card>

            <Card title='#09 Conditional render' color='#eee3e7'>
                <EvenOrOdd number={20}></EvenOrOdd>
                <UserInfo user={{ name: 'Fernando' }}></UserInfo>
                <UserInfo user={{}}></UserInfo>
                <UserInfo />
            </Card>

            <Card title='#08 Repetition Challenge' color='#fe9c8f'>
                <ProductsTable></ProductsTable>
            </Card>

            <Card title='#07 Repetition' color='#f6cd61 '>
                <StudentList></StudentList>
            </Card>

            <Card title='#06 Component with children' color='#00c8f8'>
                <Family surname='Silva'>
                    <FamilyMember name='Paulo' />
                    <FamilyMember name='Jo??o' />
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
