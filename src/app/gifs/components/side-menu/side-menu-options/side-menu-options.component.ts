import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOption{
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive  ],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent  {

  gifService = inject(GifsService)


  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label:'Trending',
      subLabel:'Gifs Populares',
      route:'/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label:'Buscador',
      subLabel:'Buscar gifs',
      route:'/dashboard/search'
    },
  ]


  

}
