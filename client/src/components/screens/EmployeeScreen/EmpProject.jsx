import React from "react";
import styled from "styled-components";
import EmpAside from "../../EmpAside";

const EmpProject = () => {
	return (
		<ProjectContainer>
			<EmpAside />
			<Project>
				<h1>Employee Project Management</h1>
			</Project>
		</ProjectContainer>
	);
};

const ProjectContainer = styled.div`
	display: flex;
`;

const Project = styled.div`
	width: 80%;

	& h1 {
		padding: 1.5rem 4rem;
		background: #1a2238;
		color: #fff;
		font-weight: bold;
	}
`;

export default EmpProject;
