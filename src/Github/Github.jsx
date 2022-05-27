import{Box, Heading, Stack, Text,Center, VStack,Image, Skeleton, SkeletonCircle,SkeletonText} from"@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios";
function Github(){
    const[loading,isLoading]=useState(true);
    const[err,setErorr]=useState(false);
    const[data,setData]=useState([]);
    useEffect(()=>{
        isLoading(true)
        axios({
         url:"https://api.github.com/search/users",
         method:"GET",
         params:{
             q:"masai",
             page:1,
             per_page:5
         }
        })
        .then(res=>{
            console.log(res)
            setData(res.data.items)
            isLoading(false)
        })
        .catch(err=>{
            setErorr(true)
            isLoading(false)
        })
    },[])
    console.log(data)
    return(
        <Box>
        <Skeleton isLoaded={!loading}>
            {loading?(<Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10"/>
                <SkeletonText mt="4" noOfLines={4} spacing="4"/>
            </Box>):(
        <Box p={2}>
            <Heading>Github Search</Heading>
            <Text>Github Search</Text>
            {
                data?.map((item)=><GithubUserCard key={item.id}{...item}/>)
            }
            <GithubUserCard/>
        </Box>
        )}
        </Skeleton>
        </Box>
    )
}
const GithubUserCard=({
   avatar_url,
   login,
   html_url
})=>{
    return(
      <Box>
        <Stack direction="row" boxShadow="lg" p={4}>
            <Center>
                 <Image 
                 w="50px"
                 src={avatar_url}/>
            </Center>
            <VStack maxW="100%" overflow="hidden">
                <Box>
                    <Text>
                        {login}
                    </Text>
                    <Text>{html_url}</Text>
                    <Text>Subtitle</Text>
                    <Text>Subtitle</Text>
                </Box>
            </VStack>
        </Stack>
      </Box>  
    )
}
export default Github