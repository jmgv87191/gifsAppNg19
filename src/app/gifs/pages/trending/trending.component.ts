import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';






@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export default class TrendingComponent {

  
  gifService = inject( GifsService )
  scrollDivRef = viewChild< ElementRef< HTMLDivElement > >('groupDiv')

  onScroll(event: Event){

    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv)return;

    const scrollTop = scrollDiv.scrollTop
    const clientHeight = scrollDiv.clientHeight
    const scrollHeight = scrollDiv.scrollHeight

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight 

    console.log(isAtBottom)

  }

  
}
