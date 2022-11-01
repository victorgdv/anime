
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/shared/service/anime.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  text!:any

  categories: any= [];

  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    this.animeService.getCategories().subscribe((res:any)=>{
      console.log(res)
      this.categories = res.data
  })

}}
