// import React from 'react';
// import { Box, Flex, VStack, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();

//   const handlePlaylistManagerClick = () => {
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box w="250px" h="100vh" bg="#2A2D3E" color="white" p="20px" boxShadow="2xl">
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Revenue</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Text>Shoppable Video</Text>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 1
//             </MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 2
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Story</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Live Commerce</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//           >
//             <Flex alignItems="center">
//               <Text ml="10px">Playlist Manager</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Product Playlist
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>One Click Post</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Calendar</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Hire Influencer</Text>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { Box, Flex, VStack, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();

//   const handlePlaylistManagerClick = () => {
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box w="250px" h="100vh" bg="#2A2D3E" color="white" p="20px" boxShadow="2xl">
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Revenue</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Text>Shoppable Video</Text>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 1
//             </MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 2
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Story</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Live Commerce</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//           >
//             <Text ml="10px">Playlist Manager</Text>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Product Playlist
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>One Click Post</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Calendar</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Hire Influencer</Text>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
//import React from 'react';
// import { Box, Flex, VStack, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();

//   const handlePlaylistManagerClick = () => {
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box w="250px" h="100vh" bg="#2A2D3E" color="white" p="20px" boxShadow="2xl">
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Revenue</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Text>Shoppable Video</Text>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">Option 1</MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">Option 2</MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Story</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Live Commerce</Text>
//         </Box>
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//           >
//             <Text ml="10px">Playlist Manager</Text>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">Product Playlist</MenuItem>
//           </MenuList>
//         </Menu>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>One Click Post</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Calendar</Text>
//         </Box>
//         <Box p="10px" _hover={{ bg: '#3B3E5B' }} borderRadius="md" cursor="pointer">
//           <Text>Hire Influencer</Text>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
//import React from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { FaHome, FaVideo, FaListAlt, FaCalendarAlt } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();

//   const handlePlaylistManagerClick = () => {
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box w="250px" h="100vh" bg="#2A2D3E" color="white" p="20px" boxShadow="2xl">
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <MenuItemButton icon={<FaHome />} label="Revenue" />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Flex alignItems="center">
//               <FaVideo />
//               <Text ml="10px">Shoppable Video</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 1
//             </MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 2
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton icon={<FaListAlt />} label="Story" />
//         <MenuItemButton icon={<FaVideo />} label="Live Commerce" />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//           >
//             <Flex alignItems="center">
//               <FaListAlt />
//               <Text ml="10px">Playlist Manager</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Product Playlist
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton icon={<FaCalendarAlt />} label="One Click Post" />
//         <MenuItemButton icon={<FaCalendarAlt />} label="Calendar" />
//         <MenuItemButton icon={<FaCalendarAlt />} label="Hire Influencer" />
//       </VStack>
//     </Box>
//   );
// };

// const MenuItemButton = ({ icon, label }) => (
//   <Flex
//     alignItems="center"
//     p="10px"
//     borderRadius="md"
//     _hover={{ bg: '#3B3E5B' }}
//     cursor="pointer"
//     transition="background-color 0.3s ease"
//   >
//     {icon}
//     <Text ml="10px">{label}</Text>
//   </Flex>
// );

// export default Sidebar;
// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { FaHome, FaVideo, FaListAlt, FaCalendarAlt } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();
  
//   // State to track active tab, "playlistManager" by default
//   const [activeTab, setActiveTab] = useState('playlistManager');

//   const handlePlaylistManagerClick = () => {
//     setActiveTab('playlistManager');
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box w="250px" h="100vh" bg="#2A2D3E" color="white" p="20px" boxShadow="2xl">
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <MenuItemButton 
//           icon={<FaHome />} 
//           label="Revenue" 
//           isActive={activeTab === 'revenue'}
//           onClick={() => setActiveTab('revenue')}
//         />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Flex alignItems="center">
//               <FaVideo />
//               <Text ml="10px">Shoppable Video</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 1
//             </MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 2
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton 
//           icon={<FaListAlt />} 
//           label="Story" 
//           isActive={activeTab === 'story'}
//           onClick={() => setActiveTab('story')}
//         />
//         <MenuItemButton 
//           icon={<FaVideo />} 
//           label="Live Commerce" 
//           isActive={activeTab === 'liveCommerce'}
//           onClick={() => setActiveTab('liveCommerce')}
//         />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//             bg={activeTab === 'playlistManager' ? '#4A4E7B' : 'inherit'}
//           >
//             <Flex alignItems="center">
//               <FaListAlt />
//               <Text ml="10px">Playlist Manager</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Product Playlist
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="One Click Post" 
//           isActive={activeTab === 'oneClickPost'}
//           onClick={() => setActiveTab('oneClickPost')}
//         />
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="Calendar" 
//           isActive={activeTab === 'calendar'}
//           onClick={() => setActiveTab('calendar')}
//         />
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="Hire Influencer" 
//           isActive={activeTab === 'hireInfluencer'}
//           onClick={() => setActiveTab('hireInfluencer')}
//         />
//       </VStack>
//     </Box>
//   );
// };

// const MenuItemButton = ({ icon, label, isActive, onClick }) => (
//   <Flex
//     alignItems="center"
//     p="10px"
//     borderRadius="md"
//     _hover={{ bg: '#3B3E5B' }}
//     cursor="pointer"
//     transition="background-color 0.3s ease"
//     bg={isActive ? '#4A4E7B' : 'inherit'}
//     onClick={onClick}
//   >
//     {icon}
//     <Text ml="10px">{label}</Text>
//   </Flex>
// );

// export default Sidebar;
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import { FaHome, FaVideo, FaListAlt, FaCalendarAlt } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { fetchPlaylists } from '../store/playlistSlice';

// const Sidebar = () => {
//   const dispatch = useDispatch();
  
//   // State to track active tab, "playlistManager" by default
//   const [activeTab, setActiveTab] = useState('playlistManager');

//   useEffect(() => {
//     // Automatically fetch playlists when the component mounts
//     if (activeTab === 'playlistManager') {
//       dispatch(fetchPlaylists());
//     }
//   }, [dispatch, activeTab]);

//   const handlePlaylistManagerClick = () => {
//     setActiveTab('playlistManager');
//     dispatch(fetchPlaylists());
//   };

//   return (
//     <Box
//     w="30%"
//     h="100vh"
//     bg="#2A2D3E"
//     color="white"
//     p="20px"
//     boxShadow="2xl"
//   >
  
//       <Flex alignItems="center" justifyContent="center" mb="30px">
//         <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
//       </Flex>
//       <VStack align="stretch" spacing="5">
//         <MenuItemButton 
//           icon={<FaHome />} 
//           label="Revenue" 
//           isActive={activeTab === 'revenue'}
//           onClick={() => setActiveTab('revenue')}
//         />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           >
//             <Flex alignItems="center">
//               <FaVideo />
//               <Text ml="10px">Shoppable Video</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 1
//             </MenuItem>
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Option 2
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton 
//           icon={<FaListAlt />} 
//           label="Story" 
//           isActive={activeTab === 'story'}
//           onClick={() => setActiveTab('story')}
//         />
//         <MenuItemButton 
//           icon={<FaVideo />} 
//           label="Live Commerce" 
//           isActive={activeTab === 'liveCommerce'}
//           onClick={() => setActiveTab('liveCommerce')}
//         />
//         <Menu>
//           <MenuButton
//             as={Flex}
//             justifyContent="space-between"
//             alignItems="center"
//             _hover={{ bg: '#3B3E5B' }}
//             p="10px"
//             borderRadius="md"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//             onClick={handlePlaylistManagerClick}
//             bg={activeTab === 'playlistManager' ? '#4A4E7B' : 'inherit'}
//           >
//             <Flex alignItems="center">
//               <FaListAlt />
//               <Text ml="10px">Playlist Manager</Text>
//             </Flex>
//             <ChevronDownIcon />
//           </MenuButton>
//           <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
//             <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
//               Product Playlist
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="One Click Post" 
//           isActive={activeTab === 'oneClickPost'}
//           onClick={() => setActiveTab('oneClickPost')}
//         />
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="Calendar" 
//           isActive={activeTab === 'calendar'}
//           onClick={() => setActiveTab('calendar')}
//         />
//         <MenuItemButton 
//           icon={<FaCalendarAlt />} 
//           label="Hire Influencer" 
//           isActive={activeTab === 'hireInfluencer'}
//           onClick={() => setActiveTab('hireInfluencer')}
//         />
//       </VStack>
//     </Box>
//   );
// };

// const MenuItemButton = ({ icon, label, isActive, onClick }) => (
//   <Flex
//     alignItems="center"
//     p="10px"
//     borderRadius="md"
//     _hover={{ bg: '#3B3E5B' }}
//     cursor="pointer"
//     transition="background-color 0.3s ease"
//     bg={isActive ? '#4A4E7B' : 'inherit'}
//     onClick={onClick}
//   >
//     {icon}
//     <Text ml="10px">{label}</Text>
//   </Flex>
// );

// export default Sidebar;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaHome, FaVideo, FaListAlt, FaCalendarAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchPlaylists } from '../store/playlistSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  // State to track active tab, "playlistManager" by default
  const [activeTab, setActiveTab] = useState('playlistManager');

  useEffect(() => {
    // Automatically fetch playlists when the component mounts
    if (activeTab === 'playlistManager') {
      dispatch(fetchPlaylists());
    }
  }, [dispatch, activeTab]);

  const handlePlaylistManagerClick = () => {
    setActiveTab('playlistManager');
    dispatch(fetchPlaylists());
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bg="#2A2D3E"
      color="white"
      p="20px"
      boxShadow="2xl"
      overflow={"auto"}
    >
      <Flex alignItems="center" justifyContent="center" mb="30px">
        <Text fontSize="2xl" fontWeight="bold">Bloash</Text>
      </Flex>
      <VStack align="stretch" spacing="4">
        <MenuItemButton
          icon={<FaHome />}
          label="Revenue"
          isActive={activeTab === 'revenue'}
          onClick={() => setActiveTab('revenue')}
        />
        <Menu>
          <MenuButton
            as={Flex}
            justifyContent="space-between"
            alignItems="center"
            _hover={{ bg: '#3B3E5B' }}
            p="10px"
            borderRadius="md"
            cursor="pointer"
            transition="background-color 0.3s ease"
          >
            <Flex alignItems="center">
              <FaVideo />
              <Text ml="10px">Shoppable Video</Text>
            </Flex>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
            <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
              Option 1
            </MenuItem>
            <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
              Option 2
            </MenuItem>
          </MenuList>
        </Menu>
        <MenuItemButton
          icon={<FaListAlt />}
          label="Story"
          isActive={activeTab === 'story'}
          onClick={() => setActiveTab('story')}
        />
        <MenuItemButton
          icon={<FaVideo />}
          label="Live Commerce"
          isActive={activeTab === 'liveCommerce'}
          onClick={() => setActiveTab('liveCommerce')}
        />
        <Menu>
          <MenuButton
            as={Flex}
            justifyContent="space-between"
            alignItems="center"
            _hover={{ bg: '#3B3E5B' }}
            p="10px"
            borderRadius="md"
            cursor="pointer"
            transition="background-color 0.3s ease"
            onClick={handlePlaylistManagerClick}
            bg={activeTab === 'playlistManager' ? '#4A4E7B' : 'inherit'}
          >
            <Flex alignItems="center">
              <FaListAlt />
              <Text ml="10px">Playlist Manager</Text>
            </Flex>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#2A2D3E" border="none" mt="0" color="white">
            <MenuItem _hover={{ bg: '#3B3E5B' }} _focus={{ bg: '#3B3E5B' }} p="10px">
              Product Playlist
            </MenuItem>
          </MenuList>
        </Menu>
        <MenuItemButton
          icon={<FaCalendarAlt />}
          label="One Click Post"
          isActive={activeTab === 'oneClickPost'}
          onClick={() => setActiveTab('oneClickPost')}
        />
        <MenuItemButton
          icon={<FaCalendarAlt />}
          label="Calendar"
          isActive={activeTab === 'calendar'}
          onClick={() => setActiveTab('calendar')}
        />
        <MenuItemButton
          icon={<FaCalendarAlt />}
          label="Hire Influencer"
          isActive={activeTab === 'hireInfluencer'}
          onClick={() => setActiveTab('hireInfluencer')}
        />
      </VStack>
    </Box>
  );
};

const MenuItemButton = ({ icon, label, isActive, onClick }) => (
  <Flex
    alignItems="center"
    p="10px"
    borderRadius="md"
    _hover={{ bg: '#3B3E5B' }}
    cursor="pointer"
    transition="background-color 0.3s ease"
    bg={isActive ? '#4A4E7B' : 'inherit'}
    onClick={onClick}
  >
    {icon}
    <Text ml="10px">{label}</Text>
  </Flex>
);

export default Sidebar;
