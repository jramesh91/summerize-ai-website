import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ComplexNavbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import WelcomePage from './pages/Welcome'; 
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import WhatsNew from "./pages/WhatsNew";


library.add(fab, fas);

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>summerize.ai</title>
          <meta
            name="description"
            content="summerize.ai is a browser extension designed to provide instant summaries of websites, articles, research papers, and more. Extract core ideas and save time as you browse the web."
          />
          <meta
            name="keywords"
            content="chrome extension, summarize, AI, youtube summary, article summary, research paper summary, web page summarizer, SummarizeIt, NLP, browser extension"
          />
        </Helmet>
        <ComplexNavbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
