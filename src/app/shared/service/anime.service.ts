import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http:HttpClient) { }

  getAllAnimes(){
    return this.http.get("https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count")
  }
  getTrendingV(){
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=5")
  }
  getCurrentV(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count")
  }
  getUpComingV(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count")
  }
   getAverageV(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating")
  }
  getUserV(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count")
  }
  getCategories(){
    return this.http.get("https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count")
  }
}
