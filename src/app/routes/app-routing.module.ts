import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from '../pages/client-form/client-form.component';
import { ClientListComponent } from '../pages/client-list/client-list.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HomeComponent } from '../pages/home/home.component';


const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'dashboard', component : DashboardComponent},
    {path : 'clients', component : ClientListComponent},
    {path : 'add-client', component : ClientFormComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { };