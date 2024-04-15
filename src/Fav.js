import React, { useEffect } from 'react'

function Fav({favorites , setFavorites,setProgress}) {

  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
  return (
    <div>
         <div className='row'>
              {favorites.map((track, index) =>
                <div key={index} className='col-lg-4 col-md-2 col-sm-12 p-5'>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={track.album.images[0].url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      {/* <button className="btn btn" onClick={() => addToFavorites(track)}><i className="ri-heart-3-line fs-4" ></i></button> */}
                      <h5 className="card-title">{track.name}</h5>
                      <p className="card-text"></p>
                      <audio src={track.preview_url} controls className='w-100' />
                    </div>
                  </div>
                </div>
              )}
            </div>
    </div>
  )
}

export default Fav
