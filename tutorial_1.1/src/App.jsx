const App = () => {
    return (
        <section>
            <h1>My First React App</h1>
            <p>This is a paragraph</p>
            <br />
            <button onClick={console.log("Button Clicked")}>Click Me</button>
            <hr />
            <hr />
            <input type="text" placeholder="Enter text here" />
            <br />
            <br />
            <br />
            <img
                src="https://en.wikipedia.org/wiki/File:Googleplex_HQ_(cropped).jpg"
                alt="Failed to Load Images"
            />
            <br />
            <br />
            <br />
            <a
                href="https://github.com/manishrnl/complete_university_management_system"
                target="_blank"
            >
                Visit My projects on github
            </a>
        </section>
    );
};

export default App;
