import { Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, increment, decrement } from "store/slices/example";

const HomePage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);
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
      <Flex alignItems="center">
        <Button onClick={() => dispatch(increment())} label="+" />
        <Heading mx="15px">{counter}</Heading>
        <Button
          onClick={() => {
            if (counter > 0) {
              dispatch(decrement());
            }
          }}
          label="-"
        />
      </Flex>
    </Flex>
  );
};

export default HomePage;
