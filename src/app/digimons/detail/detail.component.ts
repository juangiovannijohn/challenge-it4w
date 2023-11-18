import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigiserviceService } from '../services/digiservice.service';
import { DigimonDetail } from 'src/app/models/interfaces/interfaces';
import { ApiLists } from 'src/app/models/enums/enums';
import { AgifyService } from '../services/agify.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  list:string = ApiLists.Digimons
  digiId: number = 0
  digimon!: DigimonDetail
  digiAge: number= 0

  constructor(private service: DigiserviceService,private route: ActivatedRoute, private router: Router, private agiService: AgifyService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['digiId']); // Obtén el valor del parámetro 'digiId'
      if (!isNaN(id)) {
        this.digiId = id // Aquí puedes usar el número convertido
      }else {
       this.router.navigateByUrl('not-found')
      }
    });
    this.getDetailInfo(this.list, this.digiId);
    
  }

  async getDetailInfo(list:string, digiId:number){
    this.service.getDetailInfo(list, digiId).subscribe({
      next: (resp: DigimonDetail)=> {
        this.digimon = resp
        this.getAge(resp.name)

      },
      error: (er: any) => console.log(er),
      
    })
  }
  async getAge(name:string){
    this.agiService.getAge(name).subscribe({
      next: resp => {
        if(!resp.age){
          this.digiAge = this.getRandomAge()
        }else{
          this.digiAge = resp.age
        }
      },
      error: err => console.log(err)
    })
  }
  redirectToFilteredList(type:string, value:string){
    switch (type) {
      case 'type':
        this.router.navigate([''], {queryParams:{type: value}})
        break;
      case 'level':
        this.router.navigate([''], {queryParams:{level: value}})
        break;
        case 'attribute':
          this.router.navigate([''], {queryParams:{attribute: value}})
          break;
      default:
        break;
    }
  }
  redirect(digimonId: number) {
    this.digiId = digimonId
    this.getDetailInfo(this.list,this.digiId)
  }
  getRandomAge(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
