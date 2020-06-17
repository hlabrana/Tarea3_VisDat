var myData = [
    {artist: "Drake", iden: "acousticness", value: 0.39},
    {artist: "Drake", iden: "danceability", value: 0.65},
    {artist: "Drake", iden: "energy", value: 0.55},
    {artist: "Drake", iden: "instrumentalness", value: 0.24},
    {artist: "Drake", iden: "liveness", value: 0.33},
    {artist: "Drake", iden: "speechiness", value: 0.34},
    {artist: "Drake", iden: "tempo", value: 0.12},
    {artist: "Drake", iden: "valence", value: 0.40},
    {artist: "Drake", iden: "popularity", value: 0.61},
    {artist: "Drake", iden: "song_quantity", value: 1},

    {artist: "Bad Bunny", iden: "acousticness", value: 0.34},
    {artist: "Bad Bunny", iden: "danceability", value: 0.75},
    {artist: "Bad Bunny", iden: "energy", value: 0.68},
    {artist: "Bad Bunny", iden: "instrumentalness", value: 0.40},
    {artist: "Bad Bunny", iden: "liveness", value: 0.38},
    {artist: "Bad Bunny", iden: "speechiness", value: 0.46},
    {artist: "Bad Bunny", iden: "tempo", value: 0.12},
    {artist: "Bad Bunny", iden: "valence", value: 0.53},
    {artist: "Bad Bunny", iden: "popularity", value: 0.77},
    {artist: "Bad Bunny", iden: "song_quantity", value: 0.27},

    {artist: "Hillary Hahn", iden: "acousticness", value: 0.91},
    {artist: "Hillary Hahn", iden: "danceability", value: 0.35},
    {artist: "Hillary Hahn", iden: "energy", value: 0.40},
    {artist: "Hillary Hahn", iden: "instrumentalness", value: 0.38},
    {artist: "Hillary Hahn", iden: "liveness", value: 0.38},
    {artist: "Hillary Hahn", iden: "speechiness", value: 0.44},
    {artist: "Hillary Hahn", iden: "tempo", value: 0.10},
    {artist: "Hillary Hahn", iden: "valence", value: 0.45},
    {artist: "Hillary Hahn", iden: "popularity", value: 0.17},
    {artist: "Hillary Hahn", iden: "song_quantity", value: 0.94}
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
  	.config({
      data: myData,
      groupBy: "artist",
      x: "iden",
      y: "value"
    })
    .height(500)
  	.width(700)
  .render();