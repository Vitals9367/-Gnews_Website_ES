import React from 'react'
import {Loader} from 'react-feather';

const Loading = () => {
    return (
        <div className="h-full  flex-grow text-2xl flex items-center justify-center">
            Loading
            <Loader className="ml-2 loader" />
        </div>
    )
}

export default Loading
