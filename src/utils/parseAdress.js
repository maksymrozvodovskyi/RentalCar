export default function parseAdress(address) {
  let city = "";
  let country = "";

  if (address !== undefined) {
    const words = address.split(",").map((word) => word.trim());
    city = words[1];
    country = words[2];
  }

  return {
    city,
    country,
  };
}
