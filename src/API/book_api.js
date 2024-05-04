import axios from 'axios'
export async function book_api() {
  const api_response= await axios.get("https://softwium.com/api/books");
  console.log(api_response.data);
  return api_response.data;
}
export async function params_book_api(id){
    const params_api_response= await axios.get(`https://softwium.com/api/books/${id}`);
    console.log(params_api_response.data);
    return params_api_response.data;
  
}
