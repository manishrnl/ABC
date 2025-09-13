const Functions = () => {
    const UsersInfo = [
        { name: "Manish", age: 21 },
        { name: "Ravi", age: 22 },
        { name: "Ankit", age: 23 },
        { name: "Saurabh", age: 24 },
        { name: "Rahul", age: 25 },
        { name: "Satyam", age: 26 },
        { name: "Rishabh", age: 27 },
        { name: "Anuj", age: 28 },
        { name: "Aman", age: 29 },
    ];
    return (
        <div>
            {UsersInfo.map(({ name, age },index) => (
                <ul>
                    <li key={index}>
                        {++index} . Name = {name} , Age = {age}
                    </li>
                </ul>
            ))}
        </div>
    );
};
export default Functions;
