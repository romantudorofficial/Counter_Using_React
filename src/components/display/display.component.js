import React, {Component} from "react";
import "./display.style.scss";



class Display extends Component
{
    render ()
    {
        return(
            <div>
                {
                    this.props.value
                }
            </div>
        );
    }
}



export default Display;