import http from "../services/http";

const APIKEY = {
  headers: { "X-CMC_PRO_API_KEY": "df2a7538-7c8b-4b37-965b-9226334cf1f2" },
};
const testCall =  async () => {
  let qs = `?start=1&limit=5&convert=USD`;
  let b = await http.get("/cryptocurrency/listings/latest" + qs, APIKEY);
  return  b;
};
const Service = {
  testCall,
};

export default Service;
