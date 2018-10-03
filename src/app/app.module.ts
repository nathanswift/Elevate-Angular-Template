import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { animate } from './services/animate.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './presentation/loading/loading.component';
import { MainComponent } from './presentation/main/main.component';
import { AboutComponent } from './presentation/about/about.component';
import { ServicesComponent } from './presentation/services/services.component';
import { DevelopmentComponent } from './presentation/development/development.component';
import { DesignComponent } from './presentation/design/design.component';
import { SolutionsComponent } from './presentation/solutions/solutions.component';
import { PortfolioComponent } from './presentation/portfolio/portfolio.component';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    DevelopmentComponent,
    DesignComponent,
    SolutionsComponent,
    PortfolioComponent,
    ProjectsComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // extend jquery for animate.css
    animate();
  }
}
