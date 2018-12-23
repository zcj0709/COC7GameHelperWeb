import { Component, OnInit } from '@angular/core';
import { Skill} from '../../../model/characteristic';
import { Characteristic} from '../../../model/characteristic';
import { CharacterProviderService } from 
'../../../model/character-provider.service'
import { Router, ActivatedRoute } from '@angular/router';;

@Component({
	selector: 'app-page4',
	templateUrl: './page4.component.html',
	styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
	backstory:{};
	constructor(private route: ActivatedRoute,
		private router: Router,
		private provider: CharacterProviderService) {
		let key = JSON.parse(window.localStorage.getItem("backstory"));
		if (key != null){
			this.backstory = key;
		}
		else {
			this.backstory = {
				pd:'',
				ib:'',
				sp:'',
				ml:'',
				tp:'',
				tr:'',
				kbc:'',
				ad:'',
			};

		}
	}
	ConvertToCSV(objArray) {

		var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
		// console.log(array);
		var str = '';
		var row = "";

		for (var index in objArray[0]) {
			console.log(objArray[0]);
			console.log(index);
			//Now convert each value to string and comma-separated
			row += index + ',';
		}
		row = row.slice(0, -1);
		//append Label row with line break
		str += row + '\r\n';

		for (var i = 0; i < array.length; i++) {
			var line = '';
			for (var index in array[i]) {
				if (line != '') line += ','

					line += array[i][index];
			}
			str += line + '\r\n';
		}
		console.log(str);
		return str;
	}


	clear(){
		this.backstory = {
			pd:'',
			ib:'',
			sp:'',
			ml:'',
			tp:'',
			tr:'',
			kbc:'',
			ad:'',
		};
		window.localStorage.setItem("backstory", JSON.stringify(this.backstory));


	}

	submit(){
		var baseinfo = JSON.parse(window.localStorage.getItem("NewInvestigator"));
		window.localStorage.setItem("backstory", JSON.stringify(this.backstory));
		var csvData = this.provider.saveInvestigator(JSON.parse(window.localStorage.getItem("Characteristic")),
			baseinfo,JSON.parse(window.localStorage.getItem("Skill1")),
			JSON.parse(window.localStorage.getItem("Skill2")),JSON.parse(window.localStorage.getItem("Skill3")),
			this.backstory);
		console.log(csvData);
		var a = document.createElement("a");
		a.setAttribute('style', 'display:none;');
		document.body.appendChild(a);
		var blob = new Blob([csvData], { type: 'text/csv' });
		var url= window.URL.createObjectURL(blob);
		a.href = url;
		var filename = baseinfo.name+".csv";
		a.download = filename;
		a.click();
	}

	ngOnInit() {
	}

}
