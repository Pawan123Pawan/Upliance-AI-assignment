import React, { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="w-full fixed top-0 z-30">
      <Box bg="blue.500" px={4} py={6}>
        <HStack
          spacing={4}
          fontSize={"lg"}
          color={"gray.700"}
          fontWeight={"semibold"}
        >
          <Link to="/" className={`link ${path === "/" ? "activelink" : ""}`}>
            Counter
          </Link>
          {path === "/signup" ? (
            <Link
              to="/signup"
              className={`link ${path === "/signup" ? "activelink" : ""}`}
            >
              Signup
            </Link>
          ) : (
            <Link
              to="/login"
              className={`link ${path === "/login" ? "activelink" : ""}`}
            >
              Login
            </Link>
          )}
          <Link
            to="/text-editor"
            className={`link ${path === "/text-editor" ? "activelink" : ""}`}
          >
            Text Editor
          </Link>
          <Link
            to="/dashboard"
            className={`link ${path === "/dashboard" ? "activelink" : ""}`}
          >
            Dashboard
          </Link>
        </HStack>
      </Box>
    </div>
  );
};

export default Navbar;
