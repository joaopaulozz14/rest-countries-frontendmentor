import "./countrycard.css";

export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt="" className="country-card__flag" />
      <h5 className="country-card__name">{country.name.common}</h5>
      <div className="country-card__info">
        <div className="country-card__detail">
          <p className="country-card__label">Population:</p>
          <p className="country-card__value">
            {country.population.toLocaleString("pt-BR")}
          </p>
        </div>
        <div className="country-card__detail">
          <p className="country-card__label">Region:</p>
          <p className="country-card__value">{country.region}</p>
        </div>
        <div className="country-card__detail">
          <p className="country-card__label">Capital:</p>
          <p className="country-card__value">{country.capital}</p>
        </div>
      </div>
    </div>
  );
}
