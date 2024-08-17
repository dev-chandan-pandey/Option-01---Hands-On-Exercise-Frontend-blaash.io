import React from 'react';
// import { Box, VStack, Text, Button, Switch, Flex, Image } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);
 
//        console.log(videos)
//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos</Text>;
//   }
//  //CreatedOn
// // Thumbnail_Title
// // Thumbnail_URL
// //Contents
// //AssociatedProductList
// //ProductThumbnailUrl
//   return (
//     <Box w="350px" p="20px" bg="#2A2D3E" color="white">
//       <Button colorScheme="blue" mb="20px">Generate Code</Button>
//       <VStack spacing="15px" align="stretch">
//         <Box>
//           <Text fontSize="md">Thumbnail Title</Text>
//           <Text fontSize="sm">Get Sporty in Style</Text>
//         </Box>
//         <Box>
//           <Text fontSize="md">Video Status</Text>
//           <Flex alignItems="center">
//             <Text mr="10px">Active</Text>
//             <Switch defaultChecked />
//           </Flex>
//         </Box>
//         <Box>
//           <Text fontSize="md">Product List</Text>
//           <VStack spacing="10px" mt="10px">
//             {videos.map((video, index) => (
//               <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//                 <Text>{video.Thumbnail_Title}</Text>
//                 <Text>Products Attached: {video.AssociatedProductList?video.AssociatedProductList.length:"0"}</Text>
//                 <Image src={video.Thumbnail_URL}/>
//                 <Text>{video.CreatedOn}</Text>
//               </Box>
//             ))}
//           </VStack>
//         </Box>
//       </VStack>
//       <Button colorScheme="blue" mt="20px">Update Playlist</Button>
//     </Box>
//   );
// };

// export default VideoDetails;
// import React from 'react';
// import { Box, VStack, Text, Button, Switch, Flex, Image } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);

//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos. Please try again later.</Text>;
//   }

//   return (
//     <Box w="350px" p="20px" bg="#2A2D3E" color="white">
//       <Button colorScheme="blue" mb="20px">Generate Code</Button>
//       <VStack spacing="15px" align="stretch">
//         {videos.map((video, index) => (
//           <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//             <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//             <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//             {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//             <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//           </Box>
//         ))}
//       </VStack>
//       <Button colorScheme="blue" mt="20px">Update Playlist</Button>
//     </Box>
//   );
// };

// export default VideoDetails;
//import React from 'react';
// import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);

//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos. Please try again later.</Text>;
//   }

//   return (
//     <Box w="350px" p="20px" bg="#2A2D3E" color="white">
//       <Button colorScheme="blue" mb="20px">Generate Code</Button>
//       <VStack spacing="15px" align="stretch">
//         {videos.map((video, index) => (
//           <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//             <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//             <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//             {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//             <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//           </Box>
//         ))}
//       </VStack>
//       <Button colorScheme="blue" mt="20px">Update Playlist</Button>
//     </Box>
//   );
// };

// export default VideoDetails;
//import React from 'react';
// import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);

//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos. Please try again later.</Text>;
//   }

//   if (!videos || videos.length === 0) {
//     return <Text>No videos available</Text>;
//   }

//   return (
//     // <Box w="350px" p="20px" bg="#2A2D3E" color="white">
//     //   <Button colorScheme="blue" mb="20px">Generate Code</Button>
//     //   <VStack spacing="15px" align="stretch">
//     //     {videos.map((video, index) => (
//     //       <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//     //         <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//     //         <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//     //         {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//     //         <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//     //       </Box>
//     //     ))}
//     //   </VStack>
//     //   <Button colorScheme="blue" mt="20px">Update Playlist</Button>
//     // </Box>
//     <Box w="350px" p="20px" bg="#2A2D3E" color="white">
//   <Button colorScheme="blue" mb="20px" w="100%">Generate Code</Button>
//   <VStack spacing="15px" align="stretch">
//     {videos.map((video, index) => (
//       <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//         <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//         <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//         {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//         <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//       </Box>
//     ))}
//   </VStack>
//   <Button colorScheme="blue" mt="20px" w="100%">Update Playlist</Button>
// </Box>

//   );
// };

// export default VideoDetails;
// import React from 'react';
// import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);

//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos. Please try again later.</Text>;
//   }

//   return (
//     <Box
//       w="350px"
//       p="20px"
//       bg="#2A2D3E"
//       color="white"
//       overflowY="auto" // Enable vertical scrolling
//       maxH="80vh" // Set a max height for the component
//     >
//       <Button colorScheme="blue" mb="20px" w="100%">Generate Code</Button>
//       <VStack spacing="15px" align="stretch">
//         {videos.map((video, index) => (
//           <Box key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//             <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//             <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//             {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//             <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//           </Box>
//         ))}
//       </VStack>
//       <Button colorScheme="blue" mt="20px" w="100%">Update Playlist</Button>
//     </Box>
//   );
// };

// export default VideoDetails;
// import { useState } from 'react';
// import { Box, VStack, Text, Button, Image, Flex, IconButton, HStack } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

// const VideoDetails = () => {
//   const videos = useSelector((state) => state.videos.data);
//   const status = useSelector((state) => state.videos.status);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(videos.length / itemsPerPage);

//   // Get the videos for the current page
//   const currentVideos = videos.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (status === 'loading') {
//     return <Text>Loading videos...</Text>;
//   }

//   if (status === 'failed') {
//     return <Text>Error loading videos. Please try again later.</Text>;
//   }

//   return (
//     <Box w="30%" h={"100vh"} p="20px" bg="#2A2D3E" color="white" borderRadius="md">
//       <Button colorScheme="blue" mb="5px" w="100%">Generate Code</Button>
//       <Box
//         maxH="full" // Fixed height for scrolling
//         // overflowY="scroll"
//       >
//         <VStack spacing="5px" align="stretch">
//           {currentVideos.map((video, index) => (
//             <Box as={HStack} key={index} p="10px" bg="#3B3E5B" borderRadius="md">
//               {video.Thumbnail_URL && <Image src={video.Thumbnail_URL} maxH={"60px"} alt="Video Thumbnail" borderRadius="md" mt="10px" />}
//                 <VStack alignItems={"flex-end"}>
//               <Text fontSize="md" fontWeight="bold">{video.Thumbnail_Title}</Text>
//               <Text>Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}</Text>
//               <Text mt="5px" fontSize="sm">Created On: {new Date(video.CreatedOn).toLocaleDateString()}</Text>
//                 </VStack>
//             </Box>
//           ))}
//         </VStack>
//       </Box>

//       <Flex justify="space-between" mt="5px">
//         <IconButton
//           icon={<ArrowBackIcon />}
//           isDisabled={currentPage === 1}
//           onClick={handlePrevPage}
//           aria-label="Previous Page"
//         />
//         <Text alignSelf="center">{`${currentPage} / ${totalPages}`}</Text>
//         <IconButton
//           icon={<ArrowForwardIcon />}
//           isDisabled={currentPage === totalPages}
//           onClick={handleNextPage}
//           aria-label="Next Page"
//         />
//       </Flex>

//       <Button colorScheme="blue" mt="5px" w="100%">Update Playlist</Button>
//     </Box>
//   );
// };

// export default VideoDetails;

import  { useState } from 'react';
import { Box, VStack, Text, Button, Image, Flex, IconButton, HStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const VideoDetails = () => {
  const videos = useSelector((state) => state.videos.data);
  const status = useSelector((state) => state.videos.status);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  // Get the videos for the current page
  const currentVideos = videos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (status === 'loading') {
    return <Text>Loading videos...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error loading videos. Please try again later.</Text>;
  }

  return (
    <Box 
      w="100%" 
      h="100%" 
      p="20px" 
      bg="#2A2D3E" 
      color="white" 
      display="flex" 
      flexDirection="column"
    >
      <Button colorScheme="blue" mb="10px" w="100%">
        Generate Code
      </Button>

      <VStack spacing="10px" align="stretch" overflowY="auto" flex="1">
        {currentVideos.map((video, index) => (
          <Box
            key={index}
            p="10px"
            bg="#3B3E5B"
            borderRadius="md"
            display="flex"
            alignItems="center"
          >
            {video.Thumbnail_URL && (
              <Image 
                src={video.Thumbnail_URL} 
                maxH="60px" 
                alt="Video Thumbnail" 
                borderRadius="md" 
                mr="10px"
              />
            )}
            <VStack align="flex-start" spacing="2px">
              <Text fontSize="md" fontWeight="bold">
                {video.Thumbnail_Title}
              </Text>
              <Text fontSize="sm">
                Products Attached: {video.AssociatedProductList ? video.AssociatedProductList.length : "0"}
              </Text>
              <Text fontSize="xs">
                Created On: {new Date(video.CreatedOn).toLocaleDateString()}
              </Text>
            </VStack>
          </Box>
        ))}
      </VStack>

      <Flex justify="space-between" mt="10px">
        <IconButton
          icon={<ArrowBackIcon />}
          isDisabled={currentPage === 1}
          onClick={handlePrevPage}
          aria-label="Previous Page"
        />
        <Text alignSelf="center">
          {currentPage} / {totalPages}
        </Text>
        <IconButton
          icon={<ArrowForwardIcon />}
          isDisabled={currentPage === totalPages}
          onClick={handleNextPage}
          aria-label="Next Page"
        />
      </Flex>

      <Button colorScheme="blue" mt="10px" w="100%">
        Update Playlist
      </Button>
    </Box>
  );
};

export default VideoDetails;
