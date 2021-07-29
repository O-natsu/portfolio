import React from "react";
import styled from "@emotion/styled";

interface Props {
	// link: {
	//   to: string;
	//   name: string;
	// };
	text?: string;
}

export const Header = React.memo((props: Props) => {
	return <HeaderBase>{props.text}</HeaderBase>;
});

const HeaderBase = styled.header`
	height: 40px;
`;
