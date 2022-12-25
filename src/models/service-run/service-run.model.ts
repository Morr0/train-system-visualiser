import { Service } from '../service/service.model';
import { Train } from '../train/train.model';

interface ServiceRun {
	id: string;
	service: Service;
	train: Train;
}

export type { ServiceRun };
