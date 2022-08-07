import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Card({title,description,id,handleEdit,handleDelete,author,date,approved}) {
  return (
    <Center py={6}>
          <Box
            //   margin={'5%'}
              marginTop={'10px'}
              maxW={'300px'}
            //   mt={25}
            //   mb={12}
              zIndex={1}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
              overflow={'hidden'}
          >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Post
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            {/* <Text fontSize={'3xl'}>$</Text> */}
            <Text fontSize={'2xl'} fontWeight={600}>
              {title}
            </Text>
            {/* <Text color={'gray.500'}>/month</Text> */}
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem >
              {/* <ListIcon as={CheckIcon} color="green.400" />
              5.000 page views */}
                          {/* {description} */}
                          <Text fontSize={'l'} fontWeight={200}>Description: {description}</Text>
                          <Text fontSize={'l'} fontWeight={200} marginTop = {'10px'}>Date: { date}</Text>
                          <Text fontSize={'l'} fontWeight={200} marginTop = {'10px'}>Author: { author}</Text>
            </ListItem>
            
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}   onClick={(id) => handleEdit(id)}>
            Update
          </Button>
          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
                      }}
                  onClick = {()=> handleDelete(id)}>
            Delete
          </Button>
        </Box>
      </Box>
    </Center>
  );
}