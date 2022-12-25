import { ServiceRun, Station } from '../../models';
import {
	EnterStationRequest,
	EnterStationResponse,
	ExitStationRequest,
	ExitStationResponse,
	ListOccupantsRequest,
	ListOccupantsResponse,
} from './station-service.model';

class StationService {
	private station: Station;
	private serviceRunPerTrackId: Record<string, ServiceRun | undefined>;

	constructor({ station }: { station: Station }) {
		this.station = station;

		this.serviceRunPerTrackId = station.trackIds.reduce(
			(acc, trackId) => ({ ...acc, [trackId]: undefined }),
			{}
		);
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

	public exit({ serviceRun }: ExitStationRequest): ExitStationResponse {
		const desiredTrackId =
			serviceRun.service.trackIdByStationId[this.station.id] || '';
		delete this.serviceRunPerTrackId[desiredTrackId];

		return {
			canExit: true,
		};
	}

	public listTracks({}: ListOccupantsRequest): ListOccupantsResponse {
		return Object.entries(
			this.serviceRunPerTrackId
		).reduce<ListOccupantsResponse>(
			(acc, [trackId, serviceRun]) => {
				acc.serviceRunIdsByTrackId[trackId] = serviceRun?.id;

				return acc;
			},
			{ serviceRunIdsByTrackId: {} }
		);
	}
}

export default StationService;
