const fetch = require("node-fetch");

API_KEY = process.env.API_KEY;
CATEGORIES = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];

const getAPIUrl = (category) => {
  return 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&max=100&apikey=' + API_KEY;
}

for (j = 0; j < CATEGORIES.length; j++){
  // await new Promise(r => setTimeout(r, 10000));

  fetch(getAPIUrl(CATEGORIES[j]))
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    articles = data.articles;

    if(articles){

      for (i = 0; i < articles.length; i++) {

        fetch(`http://localhost:9200/news/_doc/${j}${i}`, {
          method: "POST",
          body: JSON.stringify(articles[i]),
          dataType: 'application/json',
          headers: {
            "Content-Type": "application/json",
          },
        }).then(res => {
          console.log(res.status)
        })

      }
      
    }}); 
};