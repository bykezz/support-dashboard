import { useDispatch } from "react-redux";
import InquiryList from "../components/InquiryList";
import InquiryFilter from "../components/InquiryFilter";
import { setEntriesPerPage } from "../store";
import { TiArrowSortedDown } from "react-icons/ti";
import SearchBar from "../components/SearchBar";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleEntriesChange = (e) => {
    dispatch(setEntriesPerPage(e.target.value));
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
              defaultValue="10"
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
