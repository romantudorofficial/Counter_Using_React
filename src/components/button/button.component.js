import React, {Component} from "react";
import "./button.style.scss";



class Button extends Component
{
    render ()
    {
        return (
            <button onClick = {this.props.action}>
            {
                this.props.sign
            }
            </button>
        );
    }
}



export default Button;