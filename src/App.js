import React, { useState } from 'react';
import Axios from 'axios';

import './styles/css/app.css';

import { requests } from './utils/requests';

import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';

const fetchSearchArticles = async (textInput) => {
  try{
    let response = await Axios.get(requests.searchArticles, {query: { match: { title: textInput }}}, { headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }});
    return response.data.hits.hits;
  }catch(error){
    console.error(error);
  }

}

function App() {

  const [articles, setArticles] = useState([]);
  const [loading,setLoading] = useState(false);

  const getArticles = async (text) => {

    setLoading(true);
    setArticles([]);

    console.log(`Searching for ${text} articles`);
    let response = await fetchSearchArticles(text);

    if(response.totalArticles !== 0){
      setArticles(response);
    }

    setLoading(false);
  }

  return (
    <div className="App p-4 bg-gray-200 min-h-screen flex flex-col">
      <SearchBar getArticles={getArticles} />
      {loading
      ? <Loading />
      : (<div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 flex justify-center">
          {articles && articles.map((article, index) => (<Card key={index} article={article} />))}
        </div>)
      }
    </div>
  );
}

export default App;
