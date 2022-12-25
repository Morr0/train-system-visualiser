import StationService from './station-service';
import { EnterStationRequest } from './station-service.model';

describe('StationService', () => {
	describe('Enter Station', () => {
		describe('Empty Track', () => {
			it('will be able to enter station at desired track', () => {
				// Arrange
				const stationService = new StationService({ id: 'st1' });
				const request: EnterStationRequest = {
					serviceRun: {
						id: 'sr1',
						service: { id: 's1' },
						train: { id: 't1' },
					},
				};

				// Act
				const response = stationService.enter(request);

				// Assert
				expect(response).toEqual({ canEnter: true });
			});
		});
	});
});
