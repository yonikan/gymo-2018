
// export class WidgetConfig {

//   // DoughnutChart ===================================================
//   public doughnutChartOptions: any = {
//     legend: {position: 'bottom'}
//   }
//   public doughnutColors: Array<any>  = [
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: '#0cc2aa',
//       // pointBackgroundColor: '#0cc2aa',
//       // pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     },
//     { // dark grey
//       backgroundColor: 'rgba(77,83,96,0.2)',
//       borderColor: 'rgba(77,83,96,1)',
//       // pointBackgroundColor: 'rgba(77,83,96,1)',
//       // pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(77,83,96,1)'
//     },
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     }
//   ];
//   public doughnutChartType: string = 'doughnut';     
//   public doughnutChartLabels: string[] = ['Protains', 'Carbohydrats', 'Fat'];
//   public doughnutChartData: number[] = [700, 1000, 400];


  
//   //  lineChart ===================================================
//   public lineChartOptions: any = {
//     responsive: true,
//     legend: {position: 'bottom'}
//   };
//   public lineChartColors: Array<any> = [
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: '#0cc2aa',
//       pointBackgroundColor: '#0cc2aa',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     },
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     },
//     { // dark grey
//       backgroundColor: 'rgba(77,83,96,0.2)',
//       borderColor: 'rgba(77,83,96,1)',
//       pointBackgroundColor: 'rgba(77,83,96,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(77,83,96,1)'
//     }
//   ];

//   public lineChartLegend: boolean = true;
//   public lineChartType: string = 'line';   
//   public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  
//   public lineChartData: Array<any> = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Week1'},
//     {data: [25, 79, 20, 81, 16, 75, 20], label: 'Week2'}    
//   ];

// }






    // // DoughnutChart ===================================================
    export let doughnutChartOptions: any = {
        legend: {position: 'bottom'}
      }
      export let doughnutColors: Array<any>  = [
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
      export let doughnutChartType: string = 'doughnut';     
      export let doughnutChartLabels: string[] = ['Protains', 'Carbohydrats', 'Fat'];
      export let doughnutChartData: number[] = [700, 1000, 400];
      // public doughnutChartType: string = this.widgetData.type;     
      // public doughnutChartLabels: string[] = this.widgetData.lineChartLabels;
      // public doughnutChartData: number[] = this.widgetData.lineChartData;
  
  
  
      // // lineChart ===================================================
      export let lineChartOptions: any = {
        responsive: true,
        legend: {position: 'bottom'}
      };
      export let lineChartColors: Array<any> = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#0cc2aa',
          pointBackgroundColor: '#0cc2aa',
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
  
      export let lineChartLegend: boolean = true;
      export let lineChartType: string = 'line';   
      export let lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  
      export let lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}    
      ];