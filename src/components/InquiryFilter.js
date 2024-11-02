import React from "react";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../store";
import { TiArrowSortedDown } from "react-icons/ti";
import "./InquiryFilter.css";

const InquiryFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="inquiry-filter">
      <select
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        className="filter-select"
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Pending">Pending</option>
      </select>
      <TiArrowSortedDown className="filter-icon" />
    </div>
  );
};

export default InquiryFilter;
