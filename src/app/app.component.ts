/*
*File:app.component.html
*Author: Szűcs Norbert
*Copyright: 2022, Szűcs Norbert
*Group: Szoft II/N
*Date:2022.01.13
*Github:https://github.com/Szucs-Norbert
*Feladat: 0323
*Program feladata: Testömegindex kiszámítása
*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feladat0323';

  indexVisible=false;

indexForm = new FormGroup ( {
  weight : new FormControl (''),
  height : new FormControl(''),
  index : new FormControl('')
});
 


  onClickSzamit(){
    let weight = Number(this.indexForm.value.weight);
    let height = Number(this.indexForm.value.height);
    let index = weight/Math.pow(height/100,2);
    index=Math.round(index*100)/100; 
    this.indexForm.patchValue({index:index});

    console.log(index);
    this.indexVisible=true;
    
  }

}