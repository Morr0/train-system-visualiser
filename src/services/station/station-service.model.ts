import { ServiceRun } from '../../models';

interface EnterStationRequest {
	serviceRun: ServiceRun;
}
interface EnterStationResponse {
	canEnter: boolean;
}

export type { EnterStationRequest, EnterStationResponse };
