var myData = [
    {id: "Drake", x: 0, y: 0.39, label: "acousticness"},
    {id: "Drake", x: 1, y: 0.65, label: "danceability"},
    {id: "Drake", x: 2, y: 0.55, label: "energy"},
    {id: "Drake", x: 3, y: 0.24, label: "instrumentalness"},
    {id: "Drake", x: 4, y: 0.33, label: "liveness"},
    {id: "Drake", x: 5, y: 0.34, label: "speechiness"},
    {id: "Drake", x: 6, y: 0.12, label: "tempo"},
    {id: "Drake", x: 7, y: 0.40, label: "valence"},
    {id: "Drake", x: 8, y: 0.61, label: "popularity"},
    {id: "Drake", x: 9, y: 1, label: "song_quantity"},
    {id: "Bad Bunny", x: 0, y: 0.34, label: "acousticness"},
    {id: "Bad Bunny", x: 1, y: 0.75, label: "danceability"},
    {id: "Bad Bunny", x: 2, y: 0.68, label: "energy"},
    {id: "Bad Bunny", x: 3, y: 0.40, label: "instrumentalness"},
    {id: "Bad Bunny", x: 4, y: 0.38, label: "liveness"},
    {id: "Bad Bunny", x: 5, y: 0.46, label: "speechiness"},
    {id: "Bad Bunny", x: 6, y: 0.12, label: "tempo"},
    {id: "Bad Bunny", x: 7, y: 0.53, label: "valence"},
    {id: "Bad Bunny", x: 8, y: 0.77, label: "popularity"},
    {id: "Bad Bunny", x: 9, y: 0.27, label: "song_quantity"},
    {id: "Hillary Hahn", x: 0, y: 0.91, label: "acousticness"},
    {id: "Hillary Hahn", x: 1, y: 0.35, label: "danceability"},
    {id: "Hillary Hahn", x: 2, y: 0.40, label: "energy"},
    {id: "Hillary Hahn", x: 3, y: 0.38, label: "instrumentalness"},
    {id: "Hillary Hahn", x: 4, y: 0.38, label: "liveness"},
    {id: "Hillary Hahn", x: 5, y: 0.44, label: "speechiness"},
    {id: "Hillary Hahn", x: 6, y: 0.10, label: "tempo"},
    {id: "Hillary Hahn", x: 7, y: 0.45, label: "valence"},
    {id: "Hillary Hahn", x: 8, y: 0.17, label: "popularity"},
    {id: "Hillary Hahn", x: 9, y: 0.94, label: "song_quantity"},
];



d3.select("#musicchart2")
.append('h4')
.text('Comparación entre artistas musicales usando los promedios para cada categoría [Spotify]')
.style("text-align","center")

d3.select("#musicchart2")
.append('p')
.text('Nota: los valores de cantidades de canciones fueron escalados en función del artista con más canciones')
.style("text-align","center")
  
new d3plus.LinePlot()
	.select("#musicchart2")
  .height(500)
	.width(700)
  .config({
    data: myData,
    groupBy: "id",
    x: "x",
    y: "y",
    tooltipConfig: {
  	tbody: [
    [function(d) { return d.label; }, " ",function(d) { return d.y; }]
  ]}
  })
  .render();