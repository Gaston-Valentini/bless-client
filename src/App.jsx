import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/Home/Home";
import ServicesView from "./views/Services/Services";
import QuestionsView from "./views/Questions/Questions";
import Contact from "./views/Contact/Contact";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/services" element={<ServicesView />} />
                <Route path="/questions" element={<QuestionsView />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
