import { css } from "@emotion/react";
import React from "react";
import { Box,Link } from "rebass";

const Header = () => {
  return (
    <Box 
	fontSize={20}
  py={10} px={60}
  bg="black"
	display="flex"
	justifyContent="space-between"
	alignItems="center"
>
      <Link href="/" 
      css={css`
      text-decoration:none
      `}
        color="white"
        justifyContent="space-between" 
      >
        HOME
      </Link>
      <Link href="/add" 
      css={css`
      text-decoration:none
      `}
        mr={150}
        color="white"
        justifyContent="space-between"
        textDecoration="none"
      >
        ADD
      </Link>
    </Box>
  );
};

export default Header;
