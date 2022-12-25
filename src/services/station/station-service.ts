import { ServiceRun, Station } from '../../models';
import {
	EnterStationRequest,
	EnterStationResponse,
	ExitStationRequest,
	ExitStationResponse,
} from './station-service.model';

class StationService {
	private station: Station;
	private serviceRunPerTrackId: Record<string, ServiceRun> = {};

	constructor({ station }: { station: Station }) {
		this.station = station;
	}

	public enter({ serviceRun }: EnterStationRequest): EnterStationResponse {
		const desiredTrackId =
			serviceRun.service.trackIdByStationId[this.station.id] || '';
		const isOccupied = !!this.serviceRunPerTrackId[desiredTrackId];
		if (isOccupied) {
			return { canEnter: false };
		}

		this.serviceRunPerTrackId[desiredTrackId] = serviceRun;

		return {
			canEnter: true,
		};
	}

	public exit({}: ExitStationRequest): ExitStationResponse {
		return {
			canExit: true,
		};
	}
}

export default StationService;
