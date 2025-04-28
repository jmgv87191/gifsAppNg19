import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';






@Component({
  selector: 'app-trending',
  imports: [GifListComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export default class TrendingComponent {

  
  gifService = inject( GifsService )
  
}
