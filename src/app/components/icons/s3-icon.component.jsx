import React from 'react'
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import { Handle } from 'reactflow';

function S3Icon({ data: { handles } }) {
	return (
		<>
			{
				handles.map(({ id, type, position }) => (
					<Handle key={id} id={id} type={type} position={position} style={{ background: '#555' }} isConnectable={true} />
				))
			}
			<div style={{ display: 'flex' }}>
				<S3 size={40} style={{ position: 'absolute' }} />
				<small style={{
					position: 'relative',
					fontSize: '7px',
					marginTop: '38px',
					marginLeft: '9px'
				}}
				>AWS S3</small>
			</div>

		</>
	)
}


export default S3Icon 