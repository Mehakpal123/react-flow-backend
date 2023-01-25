import React from 'react'
import LambdaFunction from 'react-aws-icons/dist/aws/compute/LambdaFunction';
import { Handle } from 'reactflow';

function LambdaFunctionIcon({ data: { handles } }) {
	return <>
		{
			handles.map(({ id, type, position }) => <Handle key={id} id={id} type={type} position={position} style={{ background: '#555' }}
				isConnectable={true} />)
		}
		<LambdaFunction size={45} />
	</>

}


export default LambdaFunctionIcon 