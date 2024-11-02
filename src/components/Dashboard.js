import { useSelector, useDispatch } from "react-redux";
import InquiryList from "./InquiryList";
import InquiryFilter from "./InquiryFilter";
import InquiryDetails from "./InquiryDetails";
import { setEntriesPerPage } from "../store";
import { TiArrowSortedDown } from "react-icons/ti";
import SearchBar from "./SearchBar";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedInquiryId = useSelector(
    (state) => state.inquiries.selectedInquiry
  );

  const handleEntriesChange = (e) => {
    dispatch(setEntriesPerPage(e.target.value));
  };

  return (
    <div className="dashboard">
      {selectedInquiryId ? (
        <InquiryDetails inquiryId={selectedInquiryId} />
      ) : (
        <>
          <div className="top-bar">
            <div>
              <p>show</p>
              <div className="entries-dropdown-wrapper">
                <select
                  onChange={handleEntriesChange}
                  className="entries-dropdown"
                  defaultValue="10"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                <TiArrowSortedDown className="dropdown-icon" />
              </div>
              <p>enteries</p>
            </div>
            <SearchBar />
          </div>
          <InquiryFilter />
          <InquiryList />
        </>
      )}
    </div>
  );
};

export default Dashboard;
