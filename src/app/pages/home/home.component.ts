import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/shared/service/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingDatos!:any
  trendingV:boolean = false

  currentVDatos!:any
  currentV:boolean = false

  UpComingVDatos!:any
  UpComingV:boolean = false

  AverageVDatos!:any
  AverageV:boolean = false

  UserVDatos!:any
  UserV:boolean = false


  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {

    this.animeService.getCurrentV().subscribe((res:any)=>{
      this.currentVDatos = res.data

})
this.animeService.getTrendingV().subscribe((res:any)=>{
  this.trendingDatos = res.data

})
this.animeService.getUpComingV().subscribe((res:any)=>{
  this.UpComingVDatos = res.data

})
this.animeService.getAverageV().subscribe((res:any)=>{
  this.AverageVDatos = res.data

})
this.animeService.getUserV().subscribe((res:any)=>{
  this.UserVDatos = res.data

})
  }

  trending(){
    this.trendingV = !this.trendingV
    this.currentV = false
    this.UserV= false
    this.UpComingV= false
    this.AverageV= false
  }
  Current(){
    this.currentV = !this.currentV
    this.trendingV = false
    this.UserV= false
    this.UpComingV= false
    this.AverageV= false
  }
  User(){
    this.UserV = !this.UserV
    this.trendingV = false
    this.currentV = false
    this.UpComingV= false
    this.AverageV= false
  }
  UpComing(){
    this.UpComingV = !this.UpComingV
    this.trendingV = false
    this.currentV = false
    this.UserV= false
    this.AverageV= false
  }
  Average(){
    this.AverageV = !this.AverageV
    this.trendingV = false
    this.currentV = false
    this.UserV= false
    this.UpComingV= false
  }

}
