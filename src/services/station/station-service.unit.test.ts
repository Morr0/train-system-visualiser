import { ServiceRun } from '../../models';
import StationService from './station-service';
import {
	EnterStationRequest,
	ExitStationRequest,
} from './station-service.model';

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
		});

		describe('Occupied Track', () => {
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

	describe('Exit Station', () => {
		it('will be able to exit station if track is occupied', () => {
			// Arrange
			const stationService = new StationService({ station: { id: 's1' } });
			const serviceRun: ServiceRun = {
				id: 'sr1',
				service: { id: 's1', trackIdByStationId: { s1: 'track1' } },
				train: { id: 't1' },
			};
			const enterRequest: EnterStationRequest = {
				serviceRun: serviceRun,
			};
			stationService.enter(enterRequest);

			const exitRequest: ExitStationRequest = { serviceRun };

			// Act
			const exitResponse = stationService.exit(exitRequest);

			// Assert
			expect(exitResponse).toEqual({ canExit: true });
		});
	});
});
