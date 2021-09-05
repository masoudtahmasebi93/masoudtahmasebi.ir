
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';
import { HistoryComponent } from './shared/components/history/history.component';
import { MainComponent } from './pages/main/main.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MtSlideshowModule } from 'mt-slideshow';
import { MtCarouselModule } from 'mt-a-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CarouselComponent,
    ContactFormComponent,
    HistoryComponent,
    MainComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MtSlideshowModule,
    MtCarouselModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
