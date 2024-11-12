import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setEntriesPerPage } from "../store";
import { useSearchParams } from "react-router-dom";
import InquiryList from "../components/InquiryList";
import InquiryFilter from "../components/InquiryFilter";
import SearchBar from "../components/SearchBar";
import { TiArrowSortedDown } from "react-icons/ti";
import "./Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { inquiriesPerPage } = useSelector((state) => state.inquiries);
  const [searchParams, setSearchParams] = useSearchParams();

  const entriesPerPageParam = searchParams.get("entriesPerPage") || "10";
  const currentPageParam = searchParams.get("currentPage") || "1";

  useEffect(() => {
    dispatch(setEntriesPerPage(entriesPerPageParam));
    dispatch(setCurrentPage(Number(currentPageParam)));
  }, [entriesPerPageParam, currentPageParam, dispatch]);

  const handleEntriesChange = (e) => {
    const newEntriesPerPage = e.target.value;
    dispatch(setEntriesPerPage(newEntriesPerPage));
    dispatch(setCurrentPage(1));
    setSearchParams({
      entriesPerPage: newEntriesPerPage,
      currentPage: "1",
    });
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <div>
          <p>Show</p>
          <div className="entries-dropdown-wrapper">
            <select
              onChange={handleEntriesChange}
              className="entries-dropdown"
              value={inquiriesPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <TiArrowSortedDown className="dropdown-icon" />
          </div>
          <p>entries</p>
        </div>
        <SearchBar />
      </div>
      <InquiryFilter />
      <InquiryList />
    </div>
  );
};

export default Dashboard;
