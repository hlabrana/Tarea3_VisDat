var data = [
  {parent: "Bad Bunny", id: "LAS QUE NO IBAN A SALIR", value:81.60},
  {parent: "Bad Bunny", id: "YHLQMDLG", value: 81.45},
  {parent: "Bad Bunny", id: "OASIS", value: 74.25},
  {parent: "Bad Bunny", id: "X 100PRE", value: 70.40},
  {parent: "Drake", id: "Dark Lane Demo Tapes", value:79.36},
  {parent: "Drake", id: "Scorpion", value: 66.92},
  {parent: "Drake", id: "More Life", value: 64.50},
  {parent: "Drake", id: "Views", value: 64.36},
  {parent: "Hilary Hahn", id: "Hilary Hahn plays Bach: Violin Sonatas Nos. 1 & 2; Partita No. 1", value:28.81},
  {parent: "Hilary Hahn", id: "Mozart: Violin Sonatas K.301, 304, 376 & 526", value: 25.16},
  {parent: "Hilary Hahn", id: "J.S.Bach: Violin Concertos", value: 22.83},
  {parent: "Hilary Hahn", id: "Hilary Hahn Plays Bach", value: 29.88}
];
  
d3.select("#BBBABYY")
.append('h4')
.text('Comparación entre artistas musicales [Spotify]')
.style("text-align","center")

new d3plus.Pack()
.data(data)
.height(500)
.width(700)
.groupBy(["parent", "id"])
.sum("value")
.select("#BBBABYY")
.render();


d3.select("#musicchart2")
.append('p')
.text('Nota: El tamaño de los dots representa la popuularidad promedio de cada disco')
.style("text-align","center")
