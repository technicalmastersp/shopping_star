import { Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { CardsItemComponent } from './components/cards-item/cards-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home-page',
        component: HomePageComponent
    },
    {
        path: 'search-page',
        component: SearchPageComponent
    },
    {
        path: 'cards-item',
        component: CardsItemComponent
    }
];