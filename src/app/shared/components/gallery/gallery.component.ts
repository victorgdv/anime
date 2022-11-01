import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() animeAllGallery! :any
  @Input() trendingDatosGallery!:any
  @Input() currentVDatosGallery!:any
  @Input() UpComingVDatosGallery!:any
  @Input() AverageVDatosGallery!:any
  @Input() UserVDatosGallery!:any



  constructor() { }

  ngOnInit(): void {
  }

}
