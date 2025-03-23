import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../country-card/CountryCard";
import "./countrylist.css";
import { useEffect } from "react";
import { getCountries } from "../../features/countries/countryThunks";

function CountryList() {
  const dispatch = useDispatch();
  const { countries, status, error } = useSelector((state) => state.countries);
  console.log(countries);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCountries("https://restcountries.com/v3.1/all"));
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Carregando países...</p>;
  }

  if (status === "failed") {
    return <p>Erro: {error}</p>;
  }

  return (
    <main className="country-list">
      {countries.data.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </main>
  );
}

export default CountryList;
