import { useState } from "react";

function Button() {
    const [color, setColor] = useState("blue");

    const change = () => {
           setColor(prevColor => prevColor === "blue" ?  "red" : "blue");
    }

    const divStyle = {
        color: "white",
        padding: "30px",
        backgroundColor: color
    }

    return (
        <>
            <button onClick={change} style={divStyle}>
                ChangeColor: {color}
            </button>
        </>
    );
}

export default Button;