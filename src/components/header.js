import { css } from "@emotion/react";
import React from "react";
import { Box,Link } from "rebass";

const Header = () => {
  return (
    <Box 
    textDecoration="none"
	bg="black"
	fontSize="20px"
	display="flex"
	justifyContent="space-between"
	alignItems="center"
	padding="10px 60px">
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
        mr="100px"
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
