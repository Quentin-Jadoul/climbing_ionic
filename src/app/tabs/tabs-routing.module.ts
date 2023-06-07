import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { PlacesListComponent } from '../components/places/places-list/places-list.component';
import { PlaceDetailsComponent } from '../components/places/place-details/place-details.component';
import { HomeListComponent } from '../components/home/home-list/home-list.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        component: PlacesListComponent,
      },
      {
        path: 'home',
        component: HomeListComponent,
      },
      {
        path: 'activities',
        component: PlacesListComponent,
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
