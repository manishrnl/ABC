const LeftBody = () => {
    const name = "Manish";
    const multiply = (a, b) => a * b;

    const date = new Date().toLocaleDateString();
    return (
        <div
            style={{ display: "flex", justifyContent: "flex-start" }}
            className="left-body"
        >
            <h3>
                Welcome {name}  ======          This is Left Body 2+2 = {2 + 2} , 5*9 ={" "}
                {multiply(5, 9)}
            </h3>
            <br />
            <br />
            <p>Current Date is : {date}</p>
        </div>
    );
};
export default LeftBody;
