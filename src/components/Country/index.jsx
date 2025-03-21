export default function Country() {
  return (
    <>
      <div className="country">
        <form className="country__form">
          <input
            type="text"
            placeholder="Type Country Name"
            className="country__input"
          />
          <button type="submit" className="country__submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
