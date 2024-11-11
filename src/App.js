import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InquiryDetails from "./pages/InquiryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inquiry-details/" element={<InquiryDetails />} />
    </Routes>
  );
}

export default App;
