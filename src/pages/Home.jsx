import NavBar from "../components/nav/NavBar";
import "./home.css";
import CountryList from "../components/country-list/CountryList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../features/countries/countryThunks";
import SearchFilter from "../components/search-filter/SearchFilter";

export default function Home() {
  const dispatch = useDispatch();
  const { countries, status, error } = useSelector((state) => state.countries);
  /* console.log(countries);
  console.log(status); */
  useEffect(() => {
    if (status === "idle") {
      dispatch(getCountries("https://restcountries.com/v3.1/all"));
    }
    if (status === "loading") {
      return <p>Carregando países...</p>;
    }

    if (status === "failed") {
      return <p>Erro: {error}</p>;
    }
  }, []);

  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <SearchFilter />
        <CountryList />
      </div>
    </div>
  );
}
