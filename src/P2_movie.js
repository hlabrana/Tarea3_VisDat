var myData = [
    {id: "Game of Thrones", x: 4, y:  57, label: "Duration"},
    {id: "Game of Thrones", x: 5, y: 9.125, label: "Chapters per season"},
    {id: "Sherlock", x: 4, y: 88, label: "Duration"},
    {id: "Sherlock",  x: 5, y: 3, label: "Chapters per season"},
    {id: "Death Note",  x: 4, y:  24, label: "Duration"},
    {id: "Death Note",  x: 5, y: 37, label: "Chapters per season"}
  ];


d3.select("#panel2")
.append('h4')
.text('Comparación entre Series de TV [IMDb]')
.style('text-align','center')
  
  new d3plus.StackedArea()
  .select("#panel2")
  .xConfig({
      labels: ["Duration", "Chapters avg"],
      ticks: [4, 5],
      scale: "ordinal"
    })
  .height(500)
  .width(700)
    .config({
      data: myData,
      groupBy: "id",
      stackOffset: "expand", 
      tooltipConfig: {
    tbody: [
    [function(d) { return d.label; }, " ",function(d) { return d.y; }]
  ]}
    })
    
    .render();
  