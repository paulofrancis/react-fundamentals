import React from "react";
import './Counter.css'
import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

class Counter extends React.Component {

    state = {
        number: this.props.numberInit || 0,
        step: this.props.stepInit || 5
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        });
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep} />
                <Buttons setInc={this.inc} setDec={this.dec}></Buttons>
            </div>
        )
    }

}

export default Counter