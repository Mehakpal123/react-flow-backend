import React from 'react'
import MobileClient from 'react-aws-icons/dist/aws/general/MobileClient';
import { Handle } from 'reactflow';

function MobileClientIcon({ data: { handles, label } }) {
	return (
		<>
			{
				handles.map(({ id, type, position }) => (
					<Handle key={id} id={id} type={type} position={position} style={{ background: '#555' }} isConnectable={true} />
				))
			}
			<div>
				<MobileClient size={80} />
				<small style={{ marginLeft: -57 }}>{label}</small>
			</div>

		</>
	)
}


export default MobileClientIcon 