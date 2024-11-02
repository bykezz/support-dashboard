import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setSelectedInquiry } from "../store";
import { FiEdit } from "react-icons/fi";
import "./InquiryList.css";

const InquiryList = () => {
  const dispatch = useDispatch();
  const { filteredInquiries, currentPage, inquiriesPerPage } = useSelector(
    (state) => state.inquiries
  );

  const startIndex = (currentPage - 1) * inquiriesPerPage;
  const currentInquiries = filteredInquiries.slice(
    startIndex,
    startIndex + inquiriesPerPage
  );

  const totalPages = Math.ceil(filteredInquiries.length / inquiriesPerPage);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open":
        return { color: "#1F9254", backgroundColor: "#EBF9F1" };
      case "Closed":
        return { color: "#A30D11", backgroundColor: "#FBE7E8" };
      case "Pending":
        return { color: "#CD6200", backgroundColor: "#FEF2E5" };
      default:
        return { color: "black", backgroundColor: "transparent" };
    }
  };

  const handleEditClick = (inquiry) => {
    dispatch(setSelectedInquiry(inquiry.id));
  };

  return (
    <div className="inquiry-list">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Subject</th>
            <th>Date of Inquiry</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentInquiries.map((inquiry) => {
            const statusStyle = getStatusStyle(inquiry.status);
            return (
              <tr key={inquiry.id}>
                <td>{inquiry.customerName}</td>
                <td>{inquiry.subject}</td>
                <td>{inquiry.date}</td>
                <td>
                  <span
                    style={{
                      color: statusStyle.color,
                      backgroundColor: statusStyle.backgroundColor,
                      padding: "4px 8px",
                      borderRadius: "10px",
                    }}
                  >
                    {inquiry.status}
                  </span>
                </td>
                <td>
                  <div
                    style={{
                      fontSize: "20px",
                      color: "darkgreen",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEditClick(inquiry)}
                  >
                    <FiEdit />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-box">
        <p>Previous</p>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setCurrentPage(i + 1))}
              disabled={currentPage === i + 1}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <p>Next</p>
      </div>
    </div>
  );
};

export default InquiryList;
