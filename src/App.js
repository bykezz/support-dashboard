import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InquiryDetails from "./components/InquiryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inquiry-details/" element={<InquiryDetails />} />
    </Routes>
  );
}

export default App;
