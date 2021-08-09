import React from "react";
import styled from "styled-components";
import AdminAside from "../../AdminAside";

const AdminGmail = () => {
	return (
		<GmailContainer>
			<AdminAside />
			<Gmail>
				<h1>Admin Gmail Inbox</h1>
			</Gmail>
		</GmailContainer>
	);
};

const GmailContainer = styled.div`
	display: flex;
`;

const Gmail = styled.div`
	width: 80%;

	& h1 {
		padding: 1.5rem 4rem;
		background: #1a2238;
		color: #fff;
		font-weight: bold;
	}
`;

export default AdminGmail;
