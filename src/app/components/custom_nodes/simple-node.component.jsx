import React from 'react'
import './simple-node-component.css';
import { Handle } from 'reactflow';

function SimpleNode() {
	return (
		<>
			<Handle
				type="target"
				position="left"
			/>
			<Handle
				type="source"
				position="bottom"
			/>
			<Handle
				id="simple-node__right"
				type="source"
				position="right"
			/>
			<div id="simple-node__main">
				<p>Greengrass Lambda</p>
			</div>
		</>
	)
}

export default SimpleNode
