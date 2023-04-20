import { Flex, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="5xl" fontWeight="bold">
        Home Page
      </Text>
    </Flex>
  );
};

export default HomePage;
