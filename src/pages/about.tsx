import React from "react";
import { Navbar } from "../components/Navbar";
import { Text } from "@chakra-ui/react";

interface aboutProps {}

const About: React.FC<aboutProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <Text>About page</Text>
    </div>
  );
};

export default About;
