import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private registrar;
	private logger;
	private errors;

	constructor(private us:UserService,private router:Router){
		this.init();
	}

	init(){
		this.registrar = {
			first:"",
			last:"",
			email:"",
			password:"",
			confirm:""
		};

		this.logger = {
			email:"",
			password:""
		};

		this.errors = [];
	}

	login(){
		this.us.login(this.logger,(data)=>{
			if(data.errors || data.message){
				this.errors.push(data.message);
			}else{
				localStorage.setItem("uid",data._id);
				this.router.navigateByUrl("/browse");
			}
		});
	}

	register(){
		this.us.register(this.registrar,(data)=>{
			if(data.errors || data.message){
				this.errors.push(data.message);
			}else{
				localStorage.setItem("uid",data._id);
				this.router.navigateByUrl("/browse");
			}			
		});
	}

	ngOnInit(){
		this.us.logout((data)=>{});
		localStorage.setItem("uid",undefined);
	}
}
