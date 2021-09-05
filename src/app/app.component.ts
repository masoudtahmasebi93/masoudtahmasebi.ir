import { Component } from '@angular/core';
import CarouselModel from './shared/models/carousel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Masoud Tahmasebi, A web developer';
  slides: CarouselModel[] = [
    { src: "../assets/images/me2.jpg", alt: "Picture 1", link: "https://google.com", caption: "Picture 1" },
    { src: "../assets/images/me.jpg", alt: "Picture 2", link: "https://masoudtahmasebi.ir", caption: "Picture 2" },
    { src: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", alt: "Picture 1" ,link: "https://google.com", caption: "Picture 1"},
    { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", alt: "Picture 2",link: "https://google.com", caption: "Picture 2" },
    { src: "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80", alt: "Picture 3",link: "https://google.com", caption: "Picture 3" }
  ];


}
