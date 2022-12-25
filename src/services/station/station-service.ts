import { ServiceRun, Station } from '../../models';
import {
	EnterStationRequest,
	EnterStationResponse,
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
}

export default StationService;
