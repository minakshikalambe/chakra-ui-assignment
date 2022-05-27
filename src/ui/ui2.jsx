import{Grid,GridItem} from"@chakra-ui/react"
function U2i(){
    return(
        <Grid
        h='200px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={[1,2]} colSpan={2} bg='tomato' />
        <GridItem rowSpan={[1,3]}colSpan={1} bg='papayawhip' />
        <GridItem rowSpan={[1,3]} colSpan={3} bg='tomato' />
      </Grid>
    )
}
export default U2i