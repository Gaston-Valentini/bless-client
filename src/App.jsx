import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/HomeView/HomeView";
import ServicesView from "./views/ServicesView/ServicesView";
import ResultsView from "./views/ResultsView/ResultsView";
import QuestionsView from "./views/QuestionsView/QuestionsView";
import ContactView from "./views/ContactView/ContactView";
import Whatsapp from "./components/Whatsapp/Whatsapp";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Whatsapp />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/services" element={<ServicesView />} />
                <Route path="/results" element={<ResultsView />} />
                <Route path="/questions" element={<QuestionsView />} />
                <Route path="/contact" element={<ContactView />} />
            </Routes>
            <Footer />
        </Router>
    );
}
