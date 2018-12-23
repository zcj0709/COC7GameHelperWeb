import { Injectable } from '@angular/core';
import { Characteristic} from './characteristic';
import { Investigator} from './characteristic';
import { Skill} from './characteristic';

@Injectable()
export class CharacterProviderService {
	chas: Characteristic[] =[];

	constructor() { }

	getInvestigators(): Investigator[]{
		// return INVESTS;
		let key = JSON.parse(window.localStorage.getItem("investigators"));
		if (key != null){
			return key;
		}
		else {
			return [];
		}
	}

	getInitialCharacteristics():Characteristic[]{
		return this.chas;
	}

	// Roll 3D6 and Multiply by 5
	generate3D6M5():number{
		let one : number = Math.floor(Math.random() * 6) + 1;
		let two: number =Math.floor(Math.random() * 6) + 1;
		let three:number = Math.floor(Math.random() * 6) + 1;
		return (one+two+three)*5;

	}
	// for SIZ INT LUCK, use 2D6+6
	generate2D6P6M5():number{
		let one : number = Math.floor(Math.random() * 6) + 1;
		let two: number =Math.floor(Math.random() * 6) + 1;
		return (one+two+6)*5;

	}
	generateCharacteristic():Characteristic{
		let cha: Characteristic = new Characteristic();
		cha.siz = this.generate2D6P6M5();
		cha.int = this.generate2D6P6M5();
		cha.luck = this.generate2D6P6M5();
		cha.str = this.generate3D6M5();
		cha.con = this.generate3D6M5();
		cha.dex = this.generate3D6M5();
		cha.app = this.generate3D6M5();
		cha.pow = this.generate3D6M5();
		cha.edu = this.generate3D6M5();
		cha.total = cha.siz+cha.int+cha.luck+cha.str+cha.con+cha.dex+cha.app+cha.pow+cha.edu;
		return cha;
	}

	getCharacteristics(): Characteristic[]{
		this.chas= [];
		var i:number; 
		var total:number = 0;
		for(i = 0; i< 9;i++) {
			let cha: Characteristic = this.generateCharacteristic();
			cha.id = i;
			this.chas.push(cha);
		}
		return this.chas;
	}

	getCharacteristic(chaIndex:number):Characteristic{
		return this.chas.find(i =>{return(i.id == chaIndex)});

	}

	exportSkill(skills:Skill[]):string{
		var str = '';
		for (var i = 0; i<skills.length;i++) {
			str+=skills[i].name+","+skills[i].initial+","+skills[i].career+","
				+skills[i].interest+","+skills[i].total+"\r\n";
		}
		return str;
	}

	exportInvestigator(invest:Investigator):any{
		var str = '';
		var backstory = invest.backstory;
		var characteristic = invest.characteristic;
		str += "Investigator Information Card\r\n"
			+"Name:,"+invest.name+"\r\n"
			+"Gender:,"+invest.gender+"\r\n"
			+"Occupation:,"+invest.occupation+"\r\n"
			+"Age:,"+invest.age+"\r\n"
			+"Residence:,"+invest.residence+"\r\n"
			+"Hometown:,"+invest.hometown+"\r\n"
			+"Era:,"+invest.era+"\r\n"
			+"Characteristic:\r\n"
			+"STR:,"+characteristic.str+",CON:,"+characteristic.con+"\r\n"
			+"SIZ:,"+characteristic.siz+",DEX:,"+characteristic.dex+"\r\n"
			+"APP:,"+characteristic.app+",INT:,"+characteristic.int+"\r\n"
			+"POW:,"+characteristic.pow+",EDU:,"+characteristic.edu+"\r\n"
			+"LUCK:,"+characteristic.luck+"\r\n"
			+"Backstory:\r\n"
			+"Personal Description:,"+backstory.pd+"\r\n"
			+"Ideology/Beliefs:,"+backstory.ib+"\r\n"
			+"Significant People:,"+backstory.sp+"\r\n"
			+"Meaningful Locations:,"+backstory.ml+"\r\n"
			+"Treasured Possessions:,"+backstory.tp+"\r\n"
			+"Traits:,"+backstory.tr+"\r\n"
			+"Key Backstory Connection:,"+backstory.kbc+"\r\n"
			+"Additional Details:,"+backstory.ad+"\r\n"
			+"\r\n\r\n"
			+"Skill Table:\r\n"
			+"Skill Name,Initial,Career,Interest,Total\r\n"
			+this.exportSkill(invest.skill1)
			+this.exportSkill(invest.skill2)
			+this.exportSkill(invest.skill3);
		return str;
	}

	downloadInvestigator(index:number):void{
		let investigator: Investigator = 
			this.getInvestigators().find(i =>{return(i.id == index)});
		var csvData = this.exportInvestigator(investigator);
		console.log(csvData);
		var a = document.createElement("a");
		a.setAttribute('style', 'display:none;');
		document.body.appendChild(a);
		var blob = new Blob([csvData], { type: 'text/csv' });
		var url= window.URL.createObjectURL(blob);
		a.href = url;
		var filename = investigator.name+".csv";
		a.download = filename;
		a.click();
	}

	deleteInvestigator(index:number):void{
		let investigators:Investigator[] = this.getInvestigators();
		let deleteIndex: number = investigators.findIndex(i =>{return(i.id == index)});
		investigators.splice(deleteIndex,1);
		window.localStorage.setItem("investigators", JSON.stringify(investigators));
	}


	saveInvestigator(cha:Characteristic,baseinfo:any,skill1:any,skill2:any,skill3:any,backstory:any):any{
		let investigators:Investigator[] = this.getInvestigators();
		let maxId: number;
		if (investigators && investigators.length > 0) {
			maxId = investigators[investigators.length - 1].id;	
		} else {
			maxId = 0;
		}
		let investigator: Investigator = new Investigator();
		investigator.id = maxId+1;
		investigator.characteristic = cha;
		investigator.name = baseinfo.name;
		investigator.gender = baseinfo.gender;
		investigator.occupation = baseinfo.occupation;
		investigator.age = baseinfo.age;
		investigator.residence = baseinfo.residence;
		investigator.hometown = baseinfo.hometown;
		investigator.era = baseinfo.era;
		investigator.skill1 = skill1;
		investigator.skill2 = skill2;
		investigator.skill3 = skill3;
		investigator.backstory = backstory;
		investigators.push(investigator);
		console.log(investigator);
		console.log(investigators);
		window.localStorage.setItem("investigators", JSON.stringify(investigators));
		return this.exportInvestigator(investigator);
	}
}
