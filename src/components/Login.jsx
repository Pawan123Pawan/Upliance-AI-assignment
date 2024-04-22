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

const Login = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async () => {
    try {
      const data = await JSON.parse(localStorage.getItem("userData"));
      const userGot = await data.find((data) => data.email === formData.email);
      if (userGot) {
        toast.success("Login success");
      } else {
        toast.error("Login error");
        navigate("/login");
      }
      setFormData({
        email: "",
        phone: "",
      });
      setIsFormDirty(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
            Login
          </Heading>
          <VStack spacing="4">
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
              onClick={() => navigate("/signup")}
              cursor={"pointer"}
            >
              Don't have an account please! <Link color={"blue"}>Signup</Link>
            </Text>
          </VStack>
        </Box>
      </div>
    </div>
  );
};

export default Login;
