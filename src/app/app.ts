import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Navbar } from "./components/navbar/navbar";
import { Carousel } from "./components/carousel/carousel";
import { Registro } from "./components/registro/registro";
import { Footer } from "./components/footer/footer";
import { Medicos } from "./components/medicos/medicos";
import { Sidebar } from "./components/sidebar/sidebar";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Carousel, Registro, Footer, Medicos, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularLandingPage');
}
