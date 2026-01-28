import { Routes } from '@angular/router';
import { WhetherUI } from './whether-ui/whether-ui';

export const routes: Routes = [
    {
        path:"whetherUi",
        component: WhetherUI
    },
    {
        path: "",
        redirectTo: "whetherUi",
        pathMatch: "full"
    }
    ,
    {
        path: "**",
        redirectTo: "whetherUi",
        pathMatch: "full"
    }
];
