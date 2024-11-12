import { configureStore, createSlice } from "@reduxjs/toolkit";
import inquiriesData from "../data/inquiries.json";

const inquiriesSlice = createSlice({
  name: "inquiries",
  initialState: {
    inquiries: inquiriesData,
    filteredInquiries: inquiriesData,
    currentPage: parseInt(localStorage.getItem("currentPage"), 10) || 1,
    inquiriesPerPage:
      parseInt(localStorage.getItem("inquiriesPerPage"), 10) || 10,
    statusFilter: "All",
    selectedInquiry: null,
    searchTerm: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
      state.filteredInquiries = state.inquiries.filter((inquiry) => {
        const matchesStatus =
          action.payload === "All" || inquiry.status === action.payload;
        const matchesSearch = inquiry.customerName
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
      });
      state.currentPage = 1;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredInquiries = state.inquiries.filter((inquiry) => {
        return inquiry.customerName
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem("currentPage", action.payload);
    },
    setSelectedInquiry: (state, action) => {
      state.selectedInquiry = action.payload;
    },
    setEntriesPerPage: (state, action) => {
      state.inquiriesPerPage = parseInt(action.payload, 10);
      localStorage.setItem("inquiriesPerPage", action.payload);
      state.currentPage = 1;
      localStorage.setItem("currentPage", 1);
    },
  },
});

export const {
  setStatusFilter,
  setCurrentPage,
  setSelectedInquiry,
  setSearchTerm,
  setEntriesPerPage,
} = inquiriesSlice.actions;

export const store = configureStore({
  reducer: {
    inquiries: inquiriesSlice.reducer,
  },
});
