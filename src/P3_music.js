var mydata = [
    {"parent": "Group 1", "id": "alpha", "value": 29,color:"#217BED"},
    {"parent": "Group 1", "id": "beta", "value": 10,color:"#217BED"},
    {"parent": "Group 1", "id": "gamma", "value": 2,color:"#217BED"},
    {"parent": "Group 2", "id": "delta", "value": 29,color:"#D80909"},
    {"parent": "Group 2", "id": "eta", "value": 25,color:"#D80909"}
];
  
d3.select("#BBBABYY")
  .append('h4')
  .text('Comparación entre artistas musicales [Spotify]')
  .style("text-align","center")

new d3plus.Pack()
  .select("#BBBABYY")
  .config({
    data: mydata,
    groupBy: ["parent", "id"],
    sum: function(d) {
    return d["value"];
    },
  })
  .height(500)
  .width(700)
  .shapeConfig({
    fill: function(d) {
        return d.color;
    }
})
.render();



