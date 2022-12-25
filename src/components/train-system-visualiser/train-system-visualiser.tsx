import { Button, Center, Container, Flex } from '@mantine/core';
import React, { useState } from 'react';

const TrainSystemVisualiser = () => {
	const [isRunning, setIsRunning] = useState(false);

	return (
		<Container fluid>
			<Flex>Upper part</Flex>
			<Flex>
				<Center>
					<Button onClick={() => setIsRunning((oldVal) => !oldVal)}>
						{isRunning ? 'Stop' : 'Run'}
					</Button>
				</Center>
			</Flex>
		</Container>
	);
};

export default TrainSystemVisualiser;
