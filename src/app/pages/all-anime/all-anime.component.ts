import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/shared/service/anime.service';

@Component({
  selector: 'app-all-anime',
  templateUrl: './all-anime.component.html',
  styleUrls: ['./all-anime.component.scss']
})
export class AllAnimeComponent implements OnInit {

  constructor(private animeService:AnimeService) { }

  animes!: any

  ngOnInit(): void {
    this.animeService.getAllAnimes().subscribe((res:any)=>{
      console.log(res)

      this.animes = res.data

      console.log(this.animes)


    })
  }

}
