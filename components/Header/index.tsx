import React from "react";
import styled from "@emotion/styled";

interface Props {
  // link: {
  //   to: string;
  //   name: string;
  // };
}

export const Header = React.memo(() => {
  return <HeaderBase>{'Header'}</HeaderBase>;
});

const HeaderBase = styled.header`
  height: 40px;
`;
