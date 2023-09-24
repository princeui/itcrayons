import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderLinks } from '../../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerFixed: boolean = false;
  mobileNav: boolean = false;

  constructor() { }

  //Header links
  links:HeaderLinks[] = [
    {
      id: 1,
      href: '',
      text: 'Home',
    },
    {
      id: 2,
      href: 'about',
      text: 'About',
    },
    {
      id: 3,
      href: 'services',
      text: 'Services',
    },
    {
      id: 4,
      href: 'contact',
      text: 'Contact',
    }
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);    
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrolling, true);
  }

  //Header fixed
  scrolling = (event): void => {
    let scrollingElement = event.target.scrollingElement;
    let scrollingElementTop = scrollingElement.scrollTop;
    if (scrollingElementTop >= 80) {
      this.headerFixed = true;
    }
    else {
      this.headerFixed = false;
    }
  };  
  toggle = (): void =>{
    this.mobileNav = !this.mobileNav
  }
}
