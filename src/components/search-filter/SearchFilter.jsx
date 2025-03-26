import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  clearSearchQuery,
} from "../../features/countries/countrySlice";
import { debounce } from "lodash";
import "./SearchFilter.css";
import search from "../../assets/search.png";

function SearchFilter() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.countries);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value === "") {
        dispatch(clearSearchQuery());
      } else {
        dispatch(setSearchQuery(value));
      }
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e) => {
    setLocalQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <section className="search-filter">
      <div className="search-filter__input">
        <img src={search} alt="search-icon" className="search-filter__icon" />
        <input
          type="text"
          className="search-filter__input-field"
          placeholder="Search for a country"
          onChange={handleChange}
          value={localQuery}
        />
      </div>
      <div className="search-filter__region">
        <legend className="search-filter__region-title">
          Filter by region
        </legend>
        <select className="search-filter__region-select">
          <option value="1">Africa</option>
          <option value="2">America</option>
          <option value="3">Asia</option>
          <option value="4">Europe</option>
          <option value="5">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
