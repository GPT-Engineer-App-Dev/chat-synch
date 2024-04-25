import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar, Badge } from '@chakra-ui/react';
import { FaUserCircle, FaCheckDouble } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      <Flex direction="column" maxW="400px" m="auto" bg="white" boxShadow="md" borderRadius="lg">
        <VStack spacing={4} p={4}>
          <HStack spacing={3}>
            <Avatar icon={<FaUserCircle />} />
            <Text fontWeight="bold">John Doe</Text>
          </HStack>
          <VStack spacing={2} w="full" overflowY="auto" maxH="300px" p={2}>
            <HStack justifyContent="flex-start" w="full">
              <Badge colorScheme="green">New</Badge>
              <Text>Hey, how are you?</Text>
            </HStack>
            <HStack justifyContent="flex-end" w="full">
              <Text>Doing great, thanks!</Text>
              <FaCheckDouble color="blue" />
            </HStack>
            <HStack justifyContent="flex-start" w="full">
              <Text>Wanna catch up later?</Text>
            </HStack>
            <HStack justifyContent="flex-end" w="full">
              <Text>Sure, see you at 6!</Text>
              <FaCheckDouble color="blue" />
            </HStack>
          </VStack>
          <HStack w="full">
            <Input placeholder="Type a message..." />
            <Button colorScheme="blue">Send</Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;