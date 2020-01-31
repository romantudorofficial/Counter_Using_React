import React, {Component} from "react";
import "./counter.style.scss";
import Button from "../button/button.component";
import Display from "../display/display.component";



class Counter extends Component
{
    increment = () =>
    {
        alert("Incremented +");
    }

    decrement = () =>
    {
        alert("Decremented -");
    }

    render ()
    {
        return(
            <div>
                <Button sign = "-" action = {this.decrement} />
                <Display value = "10" />
                <Button sign = "+" action = {this.increment} />
            </div>
        );
    }
}



export default Counter;