const NavBarss = () => {
    return (
        <section>
            <div style={{ display: "flex", gap: "10px" }}>
                <div>
                    <img
                        src="/images/lines.png"
                        alt="Lines Images"
                        width={30}
                    />
                </div>
                <div>
                    <img
                        src="/images/wikipedia.jpeg"
                        alt="Hi Images"
                        width={50}
                    />
                </div>
                <div>
                    <h1>WIKIPEDIA</h1>
                    <p>The Free Encyclopedia</p>
                </div>
                <div style={{ marginRight: "100px" }}>
                    <textarea
                        name="search Wikipedia"
                        placeholder="Search Wikipedia"
                        id=""
                    ></textarea>
                    <button>Search</button>
                </div>
                <div>
                    <ul style={{ listStyleType: "none"  }}>
                        <li style={{ display: "flex", gap: "10px" }}>
                            <a href="#">Create Account</a>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default NavBarss;
