const KEY = process.env.REACT_APP_GNEWS_API_KEY;

export const requests = {
    searchArticles: `http://localhost:9200/news/_search`,
    logSearch: 'https://gnews-api-ibm.azurewebsites.net/logs/search',
    logClick: 'https://gnews-api-ibm.azurewebsites.net/logs/click'
}