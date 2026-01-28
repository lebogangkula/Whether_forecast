import { Routes } from '@angular/router';
import { WhetherUI } from './weather-ui/whether-ui';

export const routes: Routes = [
    {
        path:"weatherUi",
        component: WhetherUI
    },
    {
        path: "",
        redirectTo: "weatherUi",
        pathMatch: "full"
    }
    ,
    {
        path: "**",
        redirectTo: "weatherUi",
        pathMatch: "full"
    }
];
