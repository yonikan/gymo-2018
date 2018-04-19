import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import './widget.config';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnChanges {

  @Input() widgetType: any[];
  // @Input() widgetData: any[];
  
  isLoading: boolean = true; 
  isListViewMode: boolean = false; 
  // animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  widgetName: string = 'Daily Calories Composition';

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  
  tableData = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'}
  ];

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor(private router: Router, public dialog: MatDialog) {

  }

   // DoughnutChart ===================================================
  public doughnutChartOptions: any = {
    legend: {position: 'bottom'}
  }
  public doughnutColors: Array<any>  = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#0cc2aa',
      // pointBackgroundColor: '#0cc2aa',
      // pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      // pointBackgroundColor: 'rgba(77,83,96,1)',
      // pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public doughnutChartType: string = 'doughnut';     
  public doughnutChartLabels: string[] = ['Protains', 'Carbohydrats', 'Fat'];
  public doughnutChartData: number[] = [700, 1000, 400];

  // public doughnutChartType: string = this.widgetData.type;     
  // public doughnutChartLabels: string[] = this.widgetData.lineChartLabels;
  // public doughnutChartData: number[] = this.widgetData.lineChartData;


  
   // lineChart ===================================================
  public lineChartOptions: any = {
    responsive: true,
    legend: {position: 'bottom'}
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#0cc2aa',
      pointBackgroundColor: '#0cc2aa',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';   
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Week1'},
    {data: [25, 79, 20, 81, 16, 75, 20], label: 'Week2'}    
  ];


  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit() {
    // console.log(this.widgetType);
    
    setTimeout(() => {
       this.isLoading = false;
    }, 1000)
    // this.isLoading = false;
  }

  editWidget() {
    // this.dialog.open(AddWidgetDialogComponent);    
  }

  directToInvestigation(widgetId: number) {
    this.router.navigate([`/dashboard/investigation/${widgetId}`]);
  }

  toggleListView() {
    this.isListViewMode = !this.isListViewMode;     
  }
}
