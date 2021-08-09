import React from "react";
import styled from "styled-components";
import AdminAside from "../../AdminAside";

const AdminProject = () => {
	return (
		<ProjectContainer>
			<AdminAside />
			<Project>
				<h1>Admin Project Management</h1>
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

export default AdminProject;
