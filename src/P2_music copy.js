var data = [
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

d3.select("#viz")
.append('h4')
.text('Comparación entre artistas musicales [Spotify]')
.style("text-align","center")
  
var vizu = d3plus.LinePlot()
  	.select("#viz")
  	.config({
      data: data,
      groupBy: "artist",
      x: "iden",
      y: "value",
      lineLabels: true
    })
    .height(500)
  	.width(700)
  .render();


var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#musicchart2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
var x = d3.scalePoint()
    .domain([
        "acousticness", 
        "danceability", 
        "energy", 
        "instrumentalness", 
        "liveness", 
        "speechiness", 
        "tempo",
        "valence",
        "popularity",
        "song_quantity"
        ])
    .range([0,width-50]);

var y = d3.scaleLinear()
    .domain([0, d3.max(data.series, d => d3.max(d.values))]).nice()
    .range([height - margin.bottom, margin.top]);

var z = d3.scaleOrdinal(d3.schemeCategory10).domain(["Hillary Hahn", "Drake", "Bad Bunny"]);

var line = d3.line()
    .curve(d3.curveLinear)
    .x(function(d, i) { return x(data.dates[i]); })
    .y(function(d) { return y(d); });
    
svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));   
svg.append("g")
	.call(d3.axisLeft(y));
  
svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(data.series)
    .join("path")
      .style("mix-blend-mode", "multiply")
      .attr("d", d => line(d.values));
    
svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[1].values[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Drake");

	svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[0].values[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Bad Bunny");
    
    
svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[2].values[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Hillary Hahn");
    
    
