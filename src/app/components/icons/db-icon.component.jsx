import React from 'react'
import DB from 'react-aws-icons/dist/aws/compute/DB';
import { Handle } from 'reactflow';

function DBIcon({ data: { handles, label } }) {
	return (
		<>
			{
				handles.map(({ id, type, position }) => (
					<Handle key={id} id={id} type={type} position={position} style={{ background: '#555' }} isConnectable={true} />
				))
			}

			<div style={{ display: 'flex' }}>
				<DB size={45} style={{ position: 'absolute' }} />
				<small style={{
					position: 'relative',
					fontSize: '7px',
					marginTop: '38px',
					marginLeft: '-3px'
				}}
				>{label}</small>
			</div>
		</>
	)
}


export default DBIcon 