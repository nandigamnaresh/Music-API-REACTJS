import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Music({setProgress, setvenkat}) {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('all');
  const [likedTracks, setLikedTracks] = useState([]);
 
 
  
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);

  useEffect(() => {
    axios.get(`https://v1.nocodeapi.com/nandigamchinnodu/spotify/tfWyXNUlFOdidrFZ/search?q=${searchTerm}&type=track`)
   
      .then(response => {
        setTracks(response.data.tracks.items);
      })
      .catch(error => {
        console.error('Error fetching tracks:', error);
      });
  }, [searchTerm]);

  const addToFavorites = (track) => {
    setvenkat(track);

    if (likedTracks.includes(track.id)) {
      setLikedTracks(likedTracks.filter(id => id !== track.id));
      
    } else {
      setLikedTracks([...likedTracks, track.id]);
    
    }
    
  };

  

  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 p-4'>
          <input className='myinp p-1'
              type='text'
              placeholder='Enter artist name'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             
            />
          </div>
         
        </div>
     
           
            
        
            <div className='row p-5'>
              {tracks.map((track, index) =>
                <div key={index} className='col-lg-4 col-md-2 col-sm-12 p-5'>
                  <div className="card p-3" style={{ width: '20rem' }}>
                    <img src={track.album.images[0].url} className="card-img-top" alt="..." id='cim' />
                    <div className="card-body">
                      <button className={`btn btn ${likedTracks.includes(track.id) ? 'text-danger' : 'text-success'}`} onClick={() => addToFavorites(track)} id='myi'>
                        <i className="ri-heart-3-fill fs-4" ></i>
                      </button>
                      <h5 className="card-title">{track.name}</h5>
                      <p className="card-text"></p>
                      <audio src={track.preview_url} controls className='w-100' />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
          


      </div>
    </div>
  );
}
