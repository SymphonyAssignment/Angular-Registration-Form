import { Component } from '@angular/core';
import { User } from './user';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  educations=['Btech','Mtech','MCA','MBA'];
  cnfPasswordError= true;
  dobError=true;
  userModel = new User('','','','',null,'',null,'', false);

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
