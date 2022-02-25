import React from "react";
import NextLink from "next/link";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={{
        base: "tomato",
        sm: "blue",
        md: "purple",
      }}
      height={16}
      paddingX={5}
    >
      <Box>
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Box>
      <HStack spacing={3}>
        <NextLink href="/shop" passHref>
          <Link>Shop</Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link>About</Link>
        </NextLink>
        <NextLink href="/board" passHref>
          <Link>Meet the Board</Link>
        </NextLink>
        <NextLink href="/gallery" passHref>
          <Link>Gallery</Link>
        </NextLink>
      </HStack>
    </Flex>
  );
};
