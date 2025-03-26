import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../country-card/CountryCard";
import "./countrylist.css";
import { useEffect, useMemo } from "react";
import { getCountries } from "../../features/countries/countryThunks";

function CountryList() {
  const dispatch = useDispatch();
  const { countries, status, error, searchQuery } = useSelector(
    (state) => state.countries
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(getCountries("https://restcountries.com/v3.1/all"));
    }
  }, [status, dispatch]);

  const filteredItems = useMemo(() => {
    return countries?.data?.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries?.data, searchQuery]);

  return (
    <main className="country-list">
      {error && <p>{error}</p>}

      {filteredItems ? (
        filteredItems.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      ) : countries.data && countries.data.length > 0 ? (
        countries.data.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default CountryList;
