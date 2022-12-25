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

export type {
	EnterStationRequest,
	EnterStationResponse,
	ExitStationRequest,
	ExitStationResponse,
};
