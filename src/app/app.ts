import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { ServiceCards } from './components/service-cards/service-cards';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Process } from './components/process/process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home, About, Services, Contact, Footer, Process, ServiceCards],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
