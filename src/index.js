
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/notes/edit/:id" element={<Editor />} />
        </Routes>
    </BrowserRouter>
);