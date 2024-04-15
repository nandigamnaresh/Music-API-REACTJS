import React, { useState, useEffect } from 'react';

export default function Pvn() {
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('prabhas');

    async function searchTracks() {
        try {
            // const response = await fetch(`https://v1.nocodeapi.com/venkatesh02/spotify/OrykmsmNxSnfeGeK/search?q=${searchTerm}&type=track`);
            // const response = await fetch(`https://v1.nocodeapi.com/chinna/spotify/aLzsmPiEWvbeIJbQ/search?q=${searchTerm}&type=track`);
            // const response = await fetch(`https://v1.nocodeapi.com/venkatesh01/spotify/KRZPvbQQgIghnUHx/browse/categories?country=india&locale=telugu&perPage=20&page=1`);
            const data = await response.json();
            console.log(data);
            setTracks(data.tracks.items); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        // Initial search on component mount (optional)
        searchTracks();
    }, []);

    return (
        <div className='container-fluid'>

            {/* nav bar */}
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">PVN-Music</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>

                        </ul>
                        {/* <form className="d-flex"> */}
                        <input
                            type='text'
                            placeholder='Enter artist name'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={searchTracks}
                        />
                        <button className='btn-success' onClick={searchTracks}>Search</button>

                        {/* </form> */}
                    </div>
                </div>
            </nav>
            {/* nav end */}


<div className='container'>
    <div className='row'>
    {tracks.map((track, index) => (
        <div className='col-lg-4 col-md-6 col-sm-12 p-5'>
       
                <div key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                        {track.album && track.album.images.length > 0 && (
                            <img src={track.album.images[0].url} alt={track.name} />
                        )}
                        <div className="card-body">
                            <h1>{track.name}</h1>
                            <h6 className="card-text"> 
                            {track.artists.map((artist, artistIndex) => (
                                <p key={artistIndex}>{artist.name}</p>
                            ))}</h6>
                            {track.preview_url && <audio src={track.preview_url} controls className='w-100' />}
                        </div>
                    </div>

                </div>
                </div>
            ))}

        
    </div>
</div>

        


        </div>
    );
}
