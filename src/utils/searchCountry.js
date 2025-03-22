export default async function searchCountry(countryName) {
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Access key not found.");
  }

  if (!countryName || countryName.trim() === "") {
    throw new Error("Enter a valid country name.");
  }

  const url = `https://api.countrylayer.com/v2/name/${countryName}?access_key=${accessKey}&fullText=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error searching for country: ${response.statusText}`);
  }

  const data = await response.json();

  if (Array.isArray(data) && data.length > 0) {
    console.log(data);
    return data[0];
  } else {
    throw new Error("Country not found.");
  }
}
