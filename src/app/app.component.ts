import { Component } from '@angular/core';
import { User } from './user';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from './users.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toggleShowHide: string = "block";  
  thankyouShowHide: string= "none";

  constructor(private userService:UsersService,private router: Router){}


  educations=['Btech','Mtech','MCA','MBA'];
  cnfPasswordError= true;
  emailExist=false;
  dobError=true;
  userModel = new User('','','','',null,'','','',true);
 

  onSubmit(){
    this.userService.register(this.userModel)
    .subscribe(
      data => {
        if(this.emailExists(data))
      {
        this.thankyouShowHide= "block";
        this.toggleShowHide="none";
      }
      },
      error => console.log('error',error)
    )
}


emailExists(data){
  if(data==1){
    this.emailExist=false;
    console.log("Candidate Registered");
    return true;
  }
  else{
    this.emailExist=true;
    console.log("Email is already present in");
    return false;
  }
}



  validatePassword(value,value1){
    if(value=== value1)
    this.cnfPasswordError= true;
    else
    this.cnfPasswordError=false;
    console.log(this.cnfPasswordError);

  }
   
 


  validatedob(value)
  {
    if(value!=null)
    {
    var s1 = value.split("-", 1);
    var  s=s1[0];
    var dobyear=parseInt(s);
   // console.log(typeof(dobyear));
    var curryear = new Date().getFullYear()
    //console.log(typeof(curryear));
    if((curryear-dobyear)>18 && (curryear-dobyear)<60)
    this.dobError=true;
    else
    this.dobError=false;
    console.log(this.dobError);
    }
  }


}
