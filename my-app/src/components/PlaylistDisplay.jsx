//import React from 'react';
//import { Box, Grid, Text } from '@chakra-ui/react';
// import {  useDispatch } from 'react-redux';
// import { fetchVideosByPlaylist } from '../store/videoSlice';

// const PlaylistDisplay = () => {
//   const playlists = useSelector((state) => state.playlists.data);
//   const status = useSelector((state) => state.playlists.status);
//   const dispatch = useDispatch();

//   const handlePlaylistClick = (playlistId) => {
//     dispatch(fetchVideosByPlaylist(playlistId));
//   };

//   if (status === 'loading') {
//     return <Text>Loading...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading playlists</Text>;
//   }

//   if (!Array.isArray(playlists) || playlists.length === 0) {
//     return <Text>No playlists available</Text>;
//   }

//   return (
//     <Box p="20px" bg="#2A2D3E" color="white" ml="260px">
//       <Text fontSize="xl" mb="20px">Product Playlists</Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap="20px">
//         {playlists.map((playlist) => (
//           <Box
//             key={playlist.postId}
//             p="10px"
//             bg="#3B3E5B"
//             borderRadius="md"
//             onClick={() => handlePlaylistClick(playlist.PlayListId)}
//             cursor="pointer"
//           >
//             <Text>{playlist.Name}</Text>
//             <Text>Post ID: {playlist.Description}</Text>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PlaylistDisplay;
// import React from 'react';
// import { Box, Grid, Text } from '@chakra-ui/react';
// import {  useDispatch } from 'react-redux';
// import { fetchVideosByPlaylist } from '../store/videoSlice';

// const PlaylistDisplay = () => {
//   const playlists = useSelector((state) => state.playlists.data);
//   const status = useSelector((state) => state.playlists.status);
//   const dispatch = useDispatch();

//   // Handles playlist item click
//   const handlePlaylistClick = (playlistId) => {
//     dispatch(fetchVideosByPlaylist(playlistId));
//   };

//   if (status === 'loading') {
//     return <Text>Loading playlists...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading playlists. Please try again later.</Text>;
//   }

//   if (!Array.isArray(playlists) || playlists.length === 0) {
//     return <Text>No playlists available</Text>;
//   }

//   return (
//     <Box p="20px" bg="#2A2D3E" color="white" ml="260px">
//       <Text fontSize="xl" mb="20px">Product Playlists</Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap="20px">
//         {playlists.map((playlist) => (
//           <Box
//             key={playlist.postId}
//             p="10px"
//             bg="#3B3E5B"
//             borderRadius="md"
//             onClick={() => handlePlaylistClick(playlist.PlayListId)}
//             cursor="pointer"
//             _hover={{ bg: '#4A4E7B' }}
//           >
//             <Text fontWeight="bold">{playlist.Name}</Text>
//             <Text>{playlist.Description}</Text>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PlaylistDisplay;
//import React from 'react';
// import { Box, Grid, Text } from '@chakra-ui/react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchVideosByPlaylist } from '../store/videoSlice';

// const PlaylistDisplay = () => {
//   const playlists = useSelector((state) => state.playlists.data);
//   const status = useSelector((state) => state.playlists.status);
//   const dispatch = useDispatch();

//   const handlePlaylistClick = (playlistId) => {
//     dispatch(fetchVideosByPlaylist(playlistId));
//   };

//   if (status === 'loading') {
//     return <Text>Loading playlists...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading playlists. Please try again later.</Text>;
//   }

//   if (!Array.isArray(playlists) || playlists.length === 0) {
//     return <Text>No playlists available</Text>;
//   }

//   return (
//     <Box p="20px" bg="#2A2D3E" color="white" ml="260px">
//       <Text fontSize="xl" mb="20px">Product Playlists</Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap="20px">
//         {playlists.map((playlist) => (
//           <Box
//             key={playlist.PlayListId}
//             p="10px"
//             bg="#3B3E5B"
//             borderRadius="md"
//             onClick={() => handlePlaylistClick(playlist.PlayListId)}
//             cursor="pointer"
//             _hover={{ bg: '#4A4E7B' }}
//           >
//             <Text fontWeight="bold">{playlist.Name}</Text>
//             <Text>{playlist.Description}</Text>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PlaylistDisplay;
// import { useEffect, useState } from 'react';
// import { Box, Grid, Text } from '@chakra-ui/react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchVideosByPlaylist } from '../store/videoSlice';

// const PlaylistDisplay = () => {
//   const playlists = useSelector((state) => state.playlists.data);
//   const status = useSelector((state) => state.playlists.status);
//   const dispatch = useDispatch();

//   const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

//   // Automatically select the first playlist when playlists are loaded
//   useEffect(() => {
//     if (playlists.length > 0) {
//       const firstPlaylistId = playlists[0].PlayListId;
//       setSelectedPlaylistId(firstPlaylistId);
//       dispatch(fetchVideosByPlaylist(firstPlaylistId));
//     }
//   }, [playlists, dispatch]);

//   const handlePlaylistClick = (playlistId) => {
//     setSelectedPlaylistId(playlistId);
//     dispatch(fetchVideosByPlaylist(playlistId));
//   };

//   if (status === 'loading') {
//     return <Text>Loading playlists...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading playlists. Please try again later.</Text>;
//   }

//   if (!Array.isArray(playlists) || playlists.length === 0) {
//     return <Text>No playlists available</Text>;
//   }

//   return (
//     <Box 
//     w={'40%'}
//     p="20px"
//      bg="#2A2D3E" 
//      color="white" 
//     h={"100vh"}>
//       <Text fontSize="xl" mb="20px">Product Playlists</Text>
//       <Grid templateColumns="repeat(3, 1fr)" gap="20px">
//         {playlists.map((playlist) => (
//           <Box
//             key={playlist.PlayListId}
//             p="10px"
//             bg={playlist.PlayListId === selectedPlaylistId ? '#4A4E7B' : '#3B3E5B'}
//             borderRadius="md"
//             onClick={() => handlePlaylistClick(playlist.PlayListId)}
//             cursor="pointer"
//             _hover={{ bg: '#4A4E7B' }}
//           >
//             <Text fontWeight="bold">{playlist.Name}</Text>
//             <Text>{playlist.Description}</Text>
//           </Box>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PlaylistDisplay;
import { FaLock } from 'react-icons/fa';
import { Button, Icon } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideosByPlaylist } from '../store/videoSlice';

const PlaylistDisplay = () => {
  const fontSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });
  const playlists = useSelector((state) => state.playlists.data);
  const status = useSelector((state) => state.playlists.status);
  const dispatch = useDispatch();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  // Automatically select the first playlist when playlists are loaded
  useEffect(() => {
    if (playlists.length > 0) {
      const firstPlaylistId = playlists[0].PlayListId;
      setSelectedPlaylistId(firstPlaylistId);
      dispatch(fetchVideosByPlaylist(firstPlaylistId));
    }
  }, [playlists, dispatch]);

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
    dispatch(fetchVideosByPlaylist(playlistId));
  };

  if (status === 'loading') {
    return <Text>Loading playlists...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error loading playlists. Please try again later.</Text>;
  }

  if (!Array.isArray(playlists) || playlists.length === 0) {
    return <Text>No playlists available</Text>;
  }

  return (
    <Box 
      w="100%"
      h="100%"
      p="20px" 
      bg="#2A2D3E" 
      color="white"
      overflowY="auto"
    >
      <Text fontSize={fontSize} mb="20px">Product Playlists</Text>
      <Grid  templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
  gap={6}>
        {playlists.map((playlist) => (
          <Box
            key={playlist.PlayListId}
            p="10px"
            bg={playlist.PlayListId === selectedPlaylistId ? '#4A4E7B' : '#3B3E5B'}
            borderRadius="md"
            onClick={() => handlePlaylistClick(playlist.PlayListId)}
            cursor="pointer"
            _hover={{ bg: '#4A4E7B' }}
            textAlign="center"
          >
            <Image
             src={playlist.Image||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvTU37ENZLTNsZePMsiaLEHDUY9a5u67llg&s'}
            />
            <Text fontSize={fontSize} fontWeight="bold">{playlist.Name}</Text>
            <Text fontSize={fontSize}>{playlist.Description||"desc not available"}</Text>
            <Button
  size="sm"
  variant="ghost"
  colorScheme="whiteAlpha"
  leftIcon={<Icon as={FaLock} />}
>
  {playlist.Post_Ids.length || 0}
</Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaylistDisplay;
