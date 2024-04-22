import React, { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

const Counter = ({height}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount >= 100 ? 100:prevCount + 1))
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box
      bgGradient={`linear(to-r, rgb(239 68 68) ${count}%, #fff ${count}%)`}
      h={height}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" size="xl" fontWeight="bold" className="text-with-shadow">
        COUNTER APPLICATION!!
      </Heading>
      <Box display="flex" alignItems="center" mt={5}>
        <Button onClick={handleDecrement} colorScheme="blue" mr="2">
          Decrement
        </Button>
        <span className="text-2xl font-bold mx-3 ">{count}</span>
        <Button onClick={handleIncrement} colorScheme="blue" ml="2">
          Increment
        </Button>
      </Box>
      <Button mt="4" onClick={handleReset} colorScheme="red" className="">
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
