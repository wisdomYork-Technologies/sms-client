import { Center, Heading } from "@chakra-ui/react";
import { Button } from "components/Button";
import { ROUTES } from "navigation/routes";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const EmptyPage = () => {
  const navigate = useNavigate();
  return (
    <Center h="100vh" flexDir="column">
      <Heading color="#000000" mb="50px">
        Page Not Found
      </Heading>
      <Button onClick={() => navigate(ROUTES.home)} label="Go to Home" />
    </Center>
  );
};

export default EmptyPage;
