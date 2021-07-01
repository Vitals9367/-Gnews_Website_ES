import React from 'react'
import Moment from 'moment';

import Axios from 'axios';
import { requests } from '../utils/requests';

const logClick = async (article) => {

  try{
    await Axios.post(requests.logClick,{article:article});
    console.log("Click log updated!");
  }catch(error){
    console.error(error);
  }

}

const Card = ({article}) => {

    const onClick = (article) => {
        logClick(article);
    }

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

    return (
        <div className="rounded bg-white shadow-lg" onClick={() => onClick(article)}>
            <a href={article.url} target="_blank" className="flex flex-col h-full" rel="noreferrer">
                {article.image && <img className="m-4 max-h-48 object-contain" src={article.image} alt={article.title}/>}
                <div className="px-6 py-4 text-left">
                    <div className="font-bold text-xl mb-2 break-words">{article.title}</div>
                    <p className="text-gray-700 text-base">
                    {truncate(article.description,200)}
                    </p>
                </div>
                <div className="h-full flex items-end py-4 px-6">
                    <span>{Moment(article.publishedAt).format('YYYY-MM-D')}</span>
                </div>
            </a>
        </div>
    )
}

export default Card
