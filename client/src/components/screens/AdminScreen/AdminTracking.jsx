import React from "react";
import styled from "styled-components";
import AdminAside from "../../AdminAside";

const AdminTracking = () => {
	return (
		<TrackingContainer>
			<AdminAside />
			<Tracking>
				<h1>Admin Tracking Management</h1>
			</Tracking>
		</TrackingContainer>
	);
};

const TrackingContainer = styled.div`
	display: flex;
`;

const Tracking = styled.div`
	width: 80%;

	& h1 {
		padding: 1.5rem 4rem;
		background: #1a2238;
		color: #fff;
		font-weight: bold;
	}
`;

export default AdminTracking;
