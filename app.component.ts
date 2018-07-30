import { Component} from '@angular/core';
import { FormGroup,FormControl}from '@angular/forms';
import { Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-reactive-app';
    loginform:FormGroup;

     constructor()
     {
       this.loginform = new FormGroup({
         firstname: new FormControl('',[
           Validators.required,
          
         ]),
         lastname:new FormControl('',[
           Validators.required,
         ]),
        
         email:new FormControl('',[
           Validators.required,
         ]),
         number:new FormControl('',[
           Validators.maxLength(10),

         ]),
         pass:new FormControl('',[
         Validators.required,
         ]),
         passcon:new FormControl('',[
           Validators.required,
         ]),
         empid:new FormControl('',[
           Validators.required,
           Validators.maxLength(4),
         ]),
         gen: new FormControl('',[
           Validators.required,
           Validators.maxLength(1),
         ]),
       })
     }

}
