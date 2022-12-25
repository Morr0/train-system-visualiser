import { Container, Flex, MantineProvider } from '@mantine/core';
import React from 'react';
import TrainSystemVisualiser from './components/train-system-visualiser/train-system-visualiser';

function App() {
	return (
		<MantineProvider>
			<TrainSystemVisualiser />
		</MantineProvider>
	);
}

export default App;
