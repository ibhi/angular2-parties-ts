/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IParty} from './models/parties-model';
import {PartiesService} from './services/parties-service';

@Component({
	selector: 'parties-list',
	appInjector: [PartiesService, FormBuilder]
})

@View({
	templateUrl: './templates/parties-list.html',
	directives: [NgFor, formDirectives]
})

export class PartiesList{
	parties: Array<IParty>;
	partiesService: PartiesService;
	party: ControlGroup;

	constructor(partiesService: PartiesService, fb: FormBuilder) {
		this.partiesService = partiesService;
		this.parties = this.partiesService.parties;
		this.party = fb.group(
			{
				title: ['', Validators.required],
				description: ['', Validators.required]
			}
		)
	}

	addParty(){
		this.partiesService.addParty(this.party.value);
	}

}