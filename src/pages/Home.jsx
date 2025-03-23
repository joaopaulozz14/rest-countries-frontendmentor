import NavBar from "../components/nav/NavBar";
import search from "../assets/search.png";
import "./home.css";
import CountryList from "../components/country-list/CountryList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../features/countries/countryThunks";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, status, error } = useSelector((state) => state.countries);
  
/*   useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";
    dispatch(getCountries(apiUrl));
    console.log(countries);
  }, []); */

  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <section className="search-filter">
          <div className="search-filter__input">
            <img
              src={search}
              alt="search-icon"
              className="search-filter__icon"
            />
            <input
              type="text"
              className="search-filter__input-field"
              placeholder="Search for a country"
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
        <CountryList />
      </div>
    </div>
  );
}
