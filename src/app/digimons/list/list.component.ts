import { Component, OnInit } from '@angular/core';
import { DigiserviceService } from '../services/digiservice.service';
import { Content, Digimons } from 'src/app/models/interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  page:number = 0
  qtyItems: number = 20
  digimons :Content[] = []
constructor( private service:DigiserviceService){

}
async ngOnInit(): Promise<void> {
await this.getDigimons()
}
getDigimons(){
  this.service.getList().subscribe({
    next : (resp: Digimons) => {
     this.digimons = resp.content
     console.log(this.digimons)
    },
    error: er => console.log(er)
  })
}

}
