import React, { useCallback, useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";

// DADOS MOCKADOS QUE DEVEM SER APAGADOS. OS NOVOS DADOS DEVEM VIR DA API
// const playlistsLocal = [
//     {
//         id: 1,
//         name: "Playlist 1"
//     },
//     {
//         id: 2,
//         name: "Playlist 2"
//     },
//     {
//         id: 3,
//         name: "Playlist 3"
//     },
//     {
//         id: 4,
//         name: "Playlist 4"
//     },
// ]
function Playlists(props) {
  const [playlists, setPlaylists] = useState([]);
  const { headers } = props

//   const headers = {
//     headers: {
//       Authorization: "fernanda-zanette-krexu",
//     },
//   };

  const getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        props.headers
      )
      .then((response) => {
        console.log(response.data.result.list);
        setPlaylists(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

    useEffect (() => {
      getAllPlaylists()
    },[])

  return (
    <div>
      {playlists.map((playlist) => {
        return <Musicas key={playlist.id} playlist={playlist} headers={headers}/>;
      })}
    </div>
  );
}

export default Playlists;
