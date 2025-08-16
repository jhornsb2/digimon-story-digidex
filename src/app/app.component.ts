import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'digimon-story-digidex';
  currentPageTitle = 'Home';

  navigationItems = [
    { name: 'Home', route: '/home', icon: 'home' },
    { name: 'Digimon', route: '/digimon', icon: 'pets' },
    { name: 'Skills', route: '/skills', icon: 'psychology' },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit() {
    // Listen to router events to track current page
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.updateCurrentPageTitle(event.url);
    });

    // Set initial page title
    this.updateCurrentPageTitle(this.router.url);
  }

  private updateCurrentPageTitle(url: string) {
    // Remove query parameters and fragments from URL
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Find matching navigation item
    const currentItem = this.navigationItems.find(
      item => item.route === cleanUrl || (cleanUrl === '/' && item.route === '/home')
    );

    this.currentPageTitle = currentItem ? currentItem.name : 'Page';
  }

  isCurrentRoute(route: string): boolean {
    const currentUrl = this.router.url.split('?')[0].split('#')[0];
    return currentUrl === route || (currentUrl === '/' && route === '/home');
  }
}
