import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ComplexNavbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>summerize.ai</title>
        <meta
          name="description"
          content="summerize.ai is a browser extension designed to provide instant summaries of websites, articles, research papers, and more. Extract core ideas and save time as you browse the web."
        />
        <meta
          name="keywords"
          content="chrome extension, summerizer, AI summarizer, article summary, research paper summary, web page summarizer, SummarizeIt, NLP, browser extension"
        />
      </Helmet>
      <ComplexNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
