import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import NavBar from "./component/NavBar.jsx";
import SubNavBar from "./component/SubNavBar.jsx";
import CenterBody from "./component/CenterBody.jsx";
import LeftBody from "./component/LeftBody.jsx";
import RightBody from "./component/RightBody.jsx";
import Footer from "./component/Footer.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NavBar />
        <SubNavBar />
        <LeftBody />
        <CenterBody />
        <RightBody />
        <Footer />
    </StrictMode>
);
