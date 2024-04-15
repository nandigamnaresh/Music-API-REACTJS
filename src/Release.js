import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './hanuman.mp3';

function Realease({ setProgress }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setProgress(50);
    axios.get('https://v1.nocodeapi.com/venkatsiva/spotify/eAVjPTlErlSkyUyd/browse/new?country=IN&perPage=20&page=1')
      .then(response => {
        console.log(response.data.albums.items);
        setAlbums(response.data.albums.items);
        setProgress(100);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, [setProgress]);

  return (
    <div>
      <div className='container-fluid'>
       
        <div className='row ms-5 ps-5'>
          {albums.map(album => (
            <div className='col-lg-4 pb-5 text-center' key={album.id} id='main-body'>
              <div className="card" style={{ width: "20rem", height: "100%" }}>
                <div className="card-body">
                  <a href={album.external_urls.spotify} target='_blank' rel="noreferrer">
                    <img src={album.images[0].url} style={{ width: "100%" }} id='data-img' alt="Album Cover" />
                  </a>
                  <h5 className='card-title'>SONG NAME: {album.name || "Hanuman"}</h5>
                  <h6 className='card-text'>Release Date: {album.release_date}</h6>
                  <audio src={album.preview_url || Song} controls />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Realease;
