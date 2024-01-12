import { useState } from "react";
import data from "./data/information.json";
import { Header } from "./components/Header";
import { DocumentsLocation } from "./components/DocumentsLocation";
import { Route, Routes } from "react-router-dom";
import { OpenedFolder } from "./components/OpenedFolder";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DocumentsLocation />} />
        <Route path="/folder/:folder_name" element={<OpenedFolder/>}/>
      </Routes>
    </div>
  );
}

export default App;
