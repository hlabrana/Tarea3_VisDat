var data = {
    y: "y",
    series: [{
            name:"Hillary Hahn",
            ys: [
                0.91,
                0.35,
                0.40,
                0.38,
                0.39,
                0.44,
                0.10,
                0.45,
                0.17,
                0.94
            ]
        },
        {
            name: "Drake",
            ys: [
                0.39,
                0.65,
                0.55,
                0.24,
                0.33,
                0.34,
                0.12,
                0.40,
                0.61,
                1
            ]
        },
        {
            name: "Bad Bunny",
            ys: [
                0.34,
                0.75,
                0.68,
                0.40,
                0.38,
                0.46,
                0.12,
                0.53,
                0.77,
                0.27   
            ]
        }

    ],
    dates: [
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
        ]
};


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
    .domain([0, d3.max(data.series, d => d3.max(d.ys))]).nice()
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
      .attr("d", d => line(d.ys));
    
svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[1].ys[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Drake");

	svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[0].ys[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Bad Bunny");
    
    
svg.append("text")
		.attr("transform", "translate(" + (width-47) + "," + y(data.series[2].ys[9]) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "black")
		.text("Hillary Hahn");
    
    
