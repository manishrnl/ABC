import { useState } from "react";

let buttonStyle = {
    padding: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "10px",
    cursor: "pointer",
    background: "lightblue",
    border: "none",
    margin: "10px",
};
function App() {
    let [counter, setCounter] = useState(1);
    const increaseCounter = () => {
        document.getElementById("errorLabel").innerText = "";
        if (counter >= 10) {
            document.getElementById("errorLabel").innerHTML =
                "Maximum limit of 10 is reched . Can not go up Further";
            return;
        }
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        document.getElementById("errorLabel").innerText = "";
        if (counter <= 0) {
            document.getElementById("errorLabel").innerText =
                "Minimum value of 0 is reched . Can not go down further";
            return;
        }
        setCounter(counter - 1);
    };

    const setValueto10 = () => {setCounter(10)};

    const setValueto0 = () => {setCounter(0)};
    return (
        <div style={{ fontSize: "25px" }}>
            <h1>Radhe Radhe everyOne , Testing Hooks</h1>
            <div style={{ textAlign: "center" }}>
                <p>Count is : {counter}</p>
                <button onClick={increaseCounter} style={buttonStyle}>
                    Increase Counter Value by :1
                </button>
                <button onClick={decreaseCounter} style={buttonStyle}>
                    Decrease Counter Value by :1
                </button>
                <br />
                <br />
                <button onClick={setValueto10} style={buttonStyle}>
                    Set Value to 10
                </button>
                <button onClick={setValueto0} style={buttonStyle}>
                    Set Value to 0
                </button>
                <p>Final count Value :{counter}</p>
                <p
                    id="errorLabel"
                    style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "25px",
                    }}
                ></p>
            </div>
        </div>
    );
}

export default App;
