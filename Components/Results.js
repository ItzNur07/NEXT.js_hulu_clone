import React from 'react';
import Thumbnail from './Thumbnail';
const Results = ({results}) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap items-center'>
        {results.map((currData) => <Thumbnail key={currData.id} data={currData} />)}
    </div>
  )
}

export default Results
