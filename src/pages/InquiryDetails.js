import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import "./InquiryDetails.css";
import { useNavigate } from "react-router-dom";

const InquiryDetails = () => {
  const navigate = useNavigate();

  const inquiry =
    useSelector((state) => state.inquiries.selectedInquiry) ||
    JSON.parse(localStorage.getItem("selectedInquiry"));

  const [response, setResponse] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (response.trim()) {
      setShowSuccessPopup(true);
      setResponse("");
    }
  };

  const handleOutsideClick = () => {
    navigate("/");
  };

  if (!inquiry) return <div>Please select an inquiry to view details.</div>;

  return (
    <div className="inquiry-container">
      <div className="inquiry-details">
        <button onClick={() => navigate(-1)} className="back-button">
          <FiArrowLeft style={{ marginRight: "5px" }} />
          Back
        </button>

        <h2>Inquiry Details</h2>
        <div
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Customer Name:</strong> {inquiry.customerName}
          </p>
          <p>
            <strong>Subject:</strong> {inquiry.subject}
          </p>
          <p>
            <strong>Date of Inquiry:</strong> {inquiry.date}
          </p>
          <p>
            <strong>Message:</strong> {inquiry.details.message}
          </p>
        </div>
        <h3>Response History</h3>
        {inquiry.details.responses.length > 0 ? (
          inquiry.details.responses.map((response, index) => (
            <div key={index} className="response">
              <p>
                <strong>Date:</strong> {response.responseDate}
              </p>
              <p>{response.message}</p>
            </div>
          ))
        ) : (
          <p>No responses yet.</p>
        )}

        <h3>Write a Response</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here"
            rows="4"
            required
            style={{ width: "95%" }}
          ></textarea>
          <button type="submit">Submit Response</button>
        </form>

        {showSuccessPopup && (
          <div className="success-popup" onClick={handleOutsideClick}>
            <div className="popup-content">
              <FiCheckCircle style={{ color: "green", fontSize: "30px" }} />
              <p className="success-message">
                Response submitted successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryDetails;
