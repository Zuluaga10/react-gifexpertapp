import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data : images, loading}= useFetchGifs(category);

  return (
      <>
    <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
    {loading && <p className='card animate__animated animate__flash'>loading</p>}
   
    { <div className="card-grid">
       
            {   
                
                images.map(img=> (
                    <GifGridItem 
                    key={img.id}
                    {...img}/>
                ))
            }
    </div> }
    </>
  )
}

    // //para que la funcion se renderice una vez
    // //[] dependencia se deja vacio si quiero que se ejecute una vez
    // useEffect(()=>{
    //     getGifs(category).then(setImage);
    // },[category])

export default GifGrid