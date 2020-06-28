const apiKey = "hGDNSxkDD_h4PTTEwz5uZRJtkPh1ci_C96TnObMipdVLON2jYUDLkXQc2DbBGJIEBY-e8BeDm7XfbuF538mnAfJaL_7UK-QkqWksIRIIv5gDwNPfJ-eXLai7fpL4XnYx";

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {Authorization: `Bearer ${apiKey}`}}
        ).then(response => {return response.json()})
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url,
                    }
                })
            }
        })
    }
}

export default Yelp;