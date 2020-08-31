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
    console.log(value);
  }


}
