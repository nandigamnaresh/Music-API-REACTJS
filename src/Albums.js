import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function Albums( {setProgress} ) {
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState("sp balu");

  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);

  useEffect(() => {
    axios.get(`https://v1.nocodeapi.com/venkatsiva/spotify/eAVjPTlErlSkyUyd/search?q=${searchQuery}&type=album&perPage=20&page=1`)
      .then(response => {
        setAlbums(response.data.albums.items);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, [searchQuery]);

  // const handleSearchQueryChange = (e) => {
  //   setSearchQuery(e.target.value);
  // }

  return (
    <div>
      <div className='container-fluid'>
        <div className='p-5'>
      <input 
              type='text'
              placeholder='Enter artist name'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             
            />
            </div>
        <div className='row ms-5 ps-5'>
          {albums.map(data =>
            <div className='col-lg-4 pb-5 text-center' id='main-body' key={data.id}>
              <div className="card" style={{ width: "20rem", height: "100%" }}>
                <div className="card-body">
                  <a href={data.external_urls.spotify} target='_blank' rel="noopener noreferrer">
                    <img src={data.images[0].url} style={{ width: "100%" }} alt='album-cover' id='data-img' />
                  </a>
                  <h5 className='card-title'>SINGER NAME: {data.artists[0] ? data.artists[0].name : 'Unknown'}</h5>
                  <h6 className='card-text'>TYPE: {data.album_type}</h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Albums;
