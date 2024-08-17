// import React from 'react';
// import { Flex } from '@chakra-ui/react';
// import Sidebar from './components/Sidebar';
// import PlaylistDisplay from './components/PlaylistDisplay';
// import VideoDetails from './components/VideoDetails';

// function App() {
//   return (
//     <Flex>
//       <Sidebar />
//       <PlaylistDisplay />
//       <VideoDetails />
//     </Flex>
//   );
// }

// export default App;
// import React from 'react';
// import { Flex, Box } from '@chakra-ui/react';
// import Sidebar from './components/Sidebar';
// import PlaylistDisplay from './components/PlaylistDisplay';
// import VideoDetails from './components/VideoDetails';

// function App() {
//   return (
//     <Flex>
//       <Sidebar />
//        {/* Removed the default margin */}
//         <PlaylistDisplay />
      
//        {/* Slight margin for VideoDetails */}
//         <VideoDetails />
      
//     </Flex>
//   );
// }

// export default App;
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import PlaylistDisplay from './components/PlaylistDisplay';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <Box h="100vh" bg="#1A202C">
      <Flex h="100%">
        <Box w="20%" h="100%">
          <Sidebar />
        </Box>
        <Box w="40%" h="100%">
          <PlaylistDisplay />
        </Box>
        <Box w="40%" h="100%">
          <VideoDetails />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
