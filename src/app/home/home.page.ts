import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage  implements OnInit {
  
  constructor( private db: AngularFireDatabase) {}
  result: any
  ngOnInit() {
    this.db.list('user').valueChanges().subscribe(data => {
      this.result = data
      console.log(this.result,"result")
    });
  }
  
}
