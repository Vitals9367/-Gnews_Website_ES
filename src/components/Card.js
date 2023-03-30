import React from 'react'
import Moment from 'moment';

const Card = ({article}) => {

    const articleData = article._source

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
    };

    return (
        <div className="rounded bg-white shadow-lg">
            <a href={articleData.url} target="_blank" className="flex flex-col h-full" rel="noreferrer">
                {articleData.image && <img className="m-4 max-h-48 object-contain" src={articleData.image} alt={articleData.title}/>}
                <div className="px-6 py-4 text-left">
                    <div className="font-bold text-xl mb-2 break-words">{articleData.title}</div>
                    <p className="text-gray-700 text-base">
                    {truncate(articleData.description,200)}
                    </p>
                </div>
                <div className="h-full flex items-end py-4 px-6">
                    <span>{Moment(articleData.publishedAt).format('YYYY-MM-D')}</span>
                </div>
            </a>
        </div>
    )
}

export default Card
