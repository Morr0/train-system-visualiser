import StationService from './station-service';
import { EnterStationRequest } from './station-service.model';

describe('StationService', () => {
	describe('Enter Station', () => {
		describe('Empty Track', () => {
			it('will be able to enter station at desired track', () => {
				// Arrange
				const stationService = new StationService({ station: { id: 's1' } });
				const request: EnterStationRequest = {
					serviceRun: {
						id: 'sr1',
						service: { id: 's1', trackIdByStationId: { s1: 'track1' } },
						train: { id: 't1' },
					},
				};

				// Act
				const response = stationService.enter(request);

				// Assert
				expect(response).toEqual({ canEnter: true });
			});

			it('will not be able to enter station desired track if occupied', () => {
				// Arrange
				const stationService = new StationService({ station: { id: 's1' } });
				const request1: EnterStationRequest = {
					serviceRun: {
						id: 'sr1',
						service: { id: 's1', trackIdByStationId: { s1: 'track1' } },
						train: { id: 't1' },
					},
				};
				stationService.enter(request1);

				const request2: EnterStationRequest = {
					serviceRun: {
						id: 'sr1',
						service: { id: 's1', trackIdByStationId: { s1: 'track1' } },
						train: { id: 't1' },
					},
				};

				// Act
				const response2 = stationService.enter(request2);

				// Assert
				expect(response2).toEqual({ canEnter: false });
			});
		});
	});
});
