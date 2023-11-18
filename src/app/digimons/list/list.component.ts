import { Component, OnInit } from '@angular/core';
import { DigiserviceService } from '../services/digiservice.service';
import { Content, Digimons } from 'src/app/models/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiLists } from 'src/app/models/enums/enums';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list:string = ApiLists.Digimons
  page: number = 0;
  qtyItems: number = 20;
  attribute: string = '';
  level: string = '';
  totalPages: number = 0;
  digimons: Content[] = [];
  constructor(private service: DigiserviceService,private route: ActivatedRoute, private router: Router) {
  }


  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      const paramsLevel = params['level'];
      const paramsAttribute = params['attribute'];
      const paramsType = params['type'];
      if (paramsLevel) this.level = paramsLevel;
      if (paramsAttribute) this.attribute = paramsAttribute;
    });
    await this.getDigimons(this.list,  this.qtyItems,  this.page,  this.attribute,  this.level);
  }
  async getDigimons(
    list:string,
    pageSize: number,
    page: number,
    attribute?: string,
    level?: string
  ) {
    this.service.getList(list, pageSize, page, attribute, level).subscribe({
      next: (resp: Digimons) => {
        this.digimons = resp.content;
        this.page = resp.pageable.currentPage;
        this.qtyItems = resp.pageable.elementsOnPage;
        this.totalPages = resp.pageable.totalPages;
      },
      error: (er: any) => console.log(er),
    });
  }
  redirect(digimonId: number) {
    this.router.navigateByUrl(`digimon/${digimonId}`);
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page = this.page + 1;
      this.getDigimons(this.list, this.qtyItems, this.page, this.attribute, this.level);
    }
  }
  previousPage() {
    if (this.page > 0) {
      this.page = this.page - 1;
      this.getDigimons(this.list, this.qtyItems, this.page, this.attribute, this.level);
    }
  }
  onPageChange(event: any) {
    this.page = event.target.value;
    this.getDigimons(this.list, this.qtyItems, this.page, this.attribute, this.level);
  }
  onQtyChange(event: any) {
    this.qtyItems = event.target.value;
    this.getDigimons(this.list, this.qtyItems, this.page, this.attribute, this.level);
  }
}
