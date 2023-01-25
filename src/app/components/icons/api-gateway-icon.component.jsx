import React from 'react'
import APIGateway from 'react-aws-icons/dist/aws/logo/APIGateway';
import { Handle } from 'reactflow';

function APIGatewayIcon({ data: { handles, label } }) {
	return (
		<>
			{
				handles.map(({ id, type, position }) => (
					<Handle key={id} id={id} type={type} position={position} style={{ background: '#555' }} isConnectable={true} />
				))
			}
			<div style={{ display: 'flex' }}>
				<APIGateway size={30} style={{ position: 'absolute' }} />
				<small style={{
					position: 'relative',
					fontSize: '7px',
					marginTop: '30px',
					marginLeft: '-6px'
				}}
				>{label}</small>
			</div>
		</>
	)
}


export default APIGatewayIcon 