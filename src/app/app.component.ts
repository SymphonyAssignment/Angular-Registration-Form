import { Component } from '@angular/core';
import { User } from './user';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from './users.service'
@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
      console.log(data)
    })
  }
  educations=['Btech','Mtech','MCA','MBA'];
  cnfPasswordError= true;
  dobError=true;
  userModel = new User('Ehraz','','','xyz@gmail.com',null,'',8877000205,'', true);

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


  f1(){
    fetch('http://localhost:8080/Regform/rest/candidate')
            .then(result => {
                 console.log(result);
            })
            .catch(error => console.log(error));
    
    }
    onSubmit(){
      console.log("hello");
      console.log(this.userModel);
    }
  


}
