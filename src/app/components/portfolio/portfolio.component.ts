import { Component, OnInit } from '@angular/core';
import portfolio from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioContent = portfolio;
  constructor() { }

  ngOnInit() {
  }

}
