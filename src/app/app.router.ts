import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { Page1Component } from "./page1/page1.component";

export const router: Routes = [
	{ path: "page1", component: Page1Component },
    { path: "", redirectTo: "page1", pathMatch: "full" }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);