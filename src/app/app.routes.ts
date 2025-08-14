import { Routes } from '@angular/router';
import { Start } from './start/start';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: '', redirectTo: 'main' ,pathMatch: 'full'},
    {path: 'main', component: Start, title: 'Home'},
    {path: 'about',component: About,title:'About'},
    {path: 'portfolio',component: Portfolio,title:'Portfolio'},
    {path: 'contact',component: Contact,title:'Contact'},
    {path: '**',component:NotFound,title:'404'}

];
