import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isFormDirty, setIsFormDirty] = useState(false);

  const navigate = useNavigate();
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsFormDirty(true);
  };

  const handleSubmit = () => {
    // Auto-generate user ID (example)
    const userId = Math.floor(Math.random() * 1000) + 1;

    try {
      const user = JSON.parse(localStorage.getItem("userData")) || [];
      localStorage.setItem(
        "userData",
        JSON.stringify([...user, { ...formData, userId: userId }])
      );
      console.log({ ...formData, userId: userId });
      toast.success("Saved successfully");
      setIsFormDirty(false);
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      navigate("/signup");
    }
  };

  const handleBeforeUnload = (e) => {
    if (isFormDirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-4/5 md:w-3/5 lg:w-[40%] border-2 rounded-lg ">
        <Box p="4">
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            textAlign={"center"}
            className="text-with-shadow uppercase"
          >
            Sign up
          </Heading>
          <VStack spacing="4">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </FormControl>
            <Button onClick={handleSubmit} colorScheme="blue">
              Submit
            </Button>
            <Text
              fontSize={"lg"}
              onClick={() => navigate("/login")}
              cursor={"pointer"}
            >
              Already have an account <Link color={"blue"}>Login</Link>
            </Text>
          </VStack>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
