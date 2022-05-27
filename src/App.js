
import './App.css';
import { ChakraProvider,Box, Center, Flex, Stack,SimpleGrid,Grid,GridItem,Container } from '@chakra-ui/react'
// import { ChakraProvider,Container } from '@chakra-ui/react';
import { useState } from 'react';
import Github from './Github/Github';
import U1i from './ui/ui1';
import U2i from './ui/ui2';

function App() {
  const[shrink,setShrink]=useState(false);
  return (
    <div >
        <ChakraProvider>
          <U1i/>
          <U2i/>
          {/* <Container>
            <Github/>
          </Container> */}
          {/* <h1>chakra</h1>
          <Box
          onClick={()=>setShrink(!shrink)}
           bg='tomato' w='100%'
            p={shrink ? 4:8} 
            color='white'>
          This is the Box
          </Box>
           <Box 
            as="button"
            borderRadius="md"
           bg='tomato' 
           h={8}
            px={4} color='white'>
         Button
           </Box>
           <Center
           bg="tomato"
           color="white"
           >
             hello world
             VISYMO, directly or indirectly operates a number of search and everyday useful content websites. We understand that your privacy is important to you, and we are committed to being transparent about the information we collect and process upon your use of our websites.
           </Center>
           <Center maxW="xl">
           This Cookie Policy (hereinafter: “Policy”) is used by Vinden.nl B.V., trading under the name VISYMO Universal Search Group, a company with limited liability under the laws of the Netherlands, with its registered office and primary place of business at Stationsdwarsweg 7, 7461 AR Rijssen, the Netherlands and registered in the register of the Netherlands Chamber of Commerce under registration number 06088480 (hereinafter: “VISYMO” or “we”). VISYMO can be reached
           </Center>
           <Flex gap="1rem">
             <Center flex="1">0</Center>
             <Center border={"1px solid black"}  flex="1">stack 1</Center >
             <Center border={"1px solid black"}  flex="1">stack 2</Center >
             <Center border={"1px solid black"}  flex="1">stack 3</Center >
           </Flex>
           <Stack 
           border={"1px solid"
          }
          // backgroundColor={["blue","black","red","green"]}
          background={{
            base:"yellow",
            sm:"blue",
            md:"black",
            lg:"green",
            xl:"red"

          }}
          w="100%"
          direction={["row","column"]}
           spacing={2} >
              <Box border={"1px solid black"}>1</Box>
              <Box border={"1px solid black"}>2</Box>
              <Box border={"1px solid black"}>3</Box>
           </Stack>
           <SimpleGrid columns={{
             base:2,
             sm:3,
             md:4,
             lg:5
           }} spacing={10}>
          <Box bg={["tomato","purple","green","blue"]} height='80px'></Box>
          <Box bg={["tomato","purple","green","blue"]} height='80px'></Box>
          <Box bg={["tomato","purple","green","blue"]} height='80px'></Box>
          <Box bg={["tomato","purple","green","blue"]} height='80px'></Box>
          <Box bg={["tomato","purple","green","blue"]} height='80px'></Box>
           </SimpleGrid>
           <Grid templateColumns='1fr 3fr 1fr' gap={6}>
             <GridItem w='100%' h='10' bg='blue.500' />
             <GridItem w='100%' h='10' bg='blue.500' />
             <GridItem w='100%' h='10' bg='blue.500' />
             <GridItem w='100%' h='10' bg='blue.500' />
             <GridItem w='100%' h='10' bg='blue.500' />
           </Grid>
           <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={[1,2]} colSpan={[2,1]} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid> */}
        </ChakraProvider>
    </div>
  );
}

export default App;
