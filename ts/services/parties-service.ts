import {IParty} from '../models/parties-model';
import {Injectable} from  'angular2/di';
@Injectable
export class PartiesService{
	parties: Array<IParty>;
	constructor() {
		this.parties = [
			{
				title: 'Party 1',
				description: 'This is party 1'
			},
			{
				title: 'Party 2',
				description: 'This is party 3'
			},
			{
				title: 'Party 3',
				description: 'This is party 3'
			},
		]
	}
	addParty(party: IParty) :void{
		this.parties.push(party);
	}
}