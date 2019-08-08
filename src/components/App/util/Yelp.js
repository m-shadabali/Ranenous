import SearchBar from "../../SearchBar/SearchBar";
import Business from "../../Business/Business";

const apikey = 'CVW98X1iDdG2-OYA_4NIF8LmOZ6PiPjpKh5gKo4QksdgWhwjYQV0n_-CP2y9Vo5I-nBjZC9PQcHy6HKvL_6b4yHYLV4ARD9PFQdlem-WlZ8EYBYZDfI6GELuSbFLXXYx';
const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY', {headers: {
         Authorization: `Bearer ${apikey}`
     },
        }).then((response) => {
       return response.json;
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
return {
    id: business.id,
    imageSrc: business.imageSrc_url,
    name: business.name,
    address: business.address,
    city: business.city,
    state:business.state,
    zipCode: business.zipCode,
    category:business.category,
    rating: business.rating,
    reviewCount: business.reviewCount,

}
                })
            }
        })
    }

}

 export default Yelp;