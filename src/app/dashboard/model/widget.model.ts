export interface Widget {
    id: string;
    name: string;
    type: string;
}

export enum widget {
    LineChart = 1,
    barChart = 2,
    pieChart = 3,
    Other = 0
}



// CLASSES ========
export class Widget {
    constructor(public id: string,
                public name: string,
                public type: string,
                public data: any) {}
}

export class Dashboard {
    public name: string;
    public description: string;
    public widgets: Widget[];
  
    constructor(name: string, desc: string, widgets: Widget[]) {
      this.name = name;
      this.description = desc;
      this.widgets = widgets;
    }
}