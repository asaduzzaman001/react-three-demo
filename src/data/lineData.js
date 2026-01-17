class Line {
  constructor(startDate, endDate, name) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.name = name;
  }
}

export const lineData = [
  new Line("2020", "ongoing", "tomorrowland"),
  new Line("2018", "today", "navy pier"),
  new Line("2015", "today", "msi chicago"),
  new Line("", "2016", "this was louise's phone"),
  new Line("2012", "today", "kikk festival 2018"),
  new Line("", "2012", "the kennedy center"),
  new Line("2016", "ongoing", "royal opera of wallonia"),
];
