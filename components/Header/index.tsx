import React from "react";
import styled from "@emotion/styled";

interface Props {
  link: {
    to: string;
    name: string;
  };
}

export const Header = React.memo((props) => {
  return <HeaderBase></HeaderBase>;
});

const HeaderBase = styled.header`
  height: 40px;
`;
