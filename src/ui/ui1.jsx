import{SimpleGrid, Box, color} from"@chakra-ui/react"
function U1i(){
    return(
      <SimpleGrid columns={{
        sm:1,
        md:3,
        lg:3
      }} spacing={1}>
     <Box bg={["tomato","purple","green"]} color='white' height='80px'>NAV</Box>
     <Box bg={["tomato","purple","green"]} color='white' height='80px'>CONTAINT</Box>
     <Box bg={["tomato","purple","green"]} color='white' height='80px'>WIDGET</Box>
      </SimpleGrid>
    )
}
export default U1i