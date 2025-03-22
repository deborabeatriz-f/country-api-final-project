import { useState } from "react";
import searchCountry from "../../utils/searchCountry";
import Preloader from "../Preloader";
import "./country.css";

export default function Country() {
  const [flagUrl, setFlagUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setCountryData(null);

    try {
      const data = await searchCountry(input);
      setCountryData(data);
      setFlagUrl(`https://flagsapi.com/${data.alpha2Code}/flat/64.png`);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <>
      <div className="country">
        <form onSubmit={handleSubmit} className="country__form">
          <input
            type="text"
            placeholder="Type Country Name"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            className="country__input"
          />
          <button type="submit" className="country__submit">
            Search
          </button>
        </form>
        {isLoading && <Preloader />}
        {error && <p className="country_error">{error}</p>}
        {countryData && (
          <div className="country__info">
            <img
              src={flagUrl}
              alt={countryData.name}
              className="country__flag"
            />
            <h2 className="country__name">{countryData.name}</h2>
            <p className="country__capital">Capital: {countryData.capital}</p>
            <p className="country__region">Region: {countryData.region}</p>
          </div>
        )}
      </div>
    </>
  );
}
