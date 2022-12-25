import { Station } from '../../models';
import {
	EnterStationRequest,
	EnterStationResponse,
} from './station-service.model';

class StationService {
	constructor({}: Station) {}

	public enter({}: EnterStationRequest): EnterStationResponse {
		return {
			canEnter: true,
		};
	}
}

export default StationService;
