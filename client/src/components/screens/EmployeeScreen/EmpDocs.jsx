import React from "react";
import styled from "styled-components";
import EmpAside from "../../EmpAside";

const EmpDocs = () => {
	return (
		<DocsContainer>
			<EmpAside />
			<Docs>
				<h1>Employee Document Sharing</h1>
			</Docs>
		</DocsContainer>
	);
};

const DocsContainer = styled.div`
	display: flex;
`;

const Docs = styled.div`
	width: 80%;

	& h1 {
		padding: 1.5rem 4rem;
		background: #1a2238;
		color: #fff;
		font-weight: bold;
	}
`;

export default EmpDocs;
