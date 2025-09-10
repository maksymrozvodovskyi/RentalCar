export default function parseAddress(address) {
  let city = "";
  let country = "";

  if (address !== undefined) {
    const words = address.split(",").map((word) => word.trim()); // розбив рядок по комам і видалив лишні пробіли
    city = words[1];
    country = words[2];
  }

  return {
    city,
    country,
  };
}
