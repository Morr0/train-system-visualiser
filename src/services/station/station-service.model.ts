import { ServiceRun } from '../../models';

interface EnterStationRequest {
	serviceRun: ServiceRun;
}
interface EnterStationResponse {
	canEnter: boolean;
}

interface ExitStationRequest {
	serviceRun: ServiceRun;
}
interface ExitStationResponse {
	canExit: boolean;
}

interface ListOccupantsRequest {}
interface ListOccupantsResponse {
	serviceRunIdsByTrackId: Record<string, string | undefined>;
}

export type {
	EnterStationRequest,
	EnterStationResponse,
	ListOccupantsRequest,
	ListOccupantsResponse,
	ExitStationRequest,
	ExitStationResponse,
};
