var mydata = [
    {"parent": "Group 1", "id": "alpha", "value": 29},
    {"parent": "Group 1", "id": "beta", "value": 10},
    {"parent": "Group 1", "id": "gamma", "value": 2},
    {"parent": "Group 2", "id": "delta", "value": 29},
    {"parent": "Group 2", "id": "eta", "value": 25}
  ];
  
d3.select("#BBBABYY")
  .append('h4')
  .text('Comparación entre artistas musicales [Spotify]')
  .style("text-align","center")

new d3plus.Pack()
  .select("#BBn6BABYY")
  .config({
    data: mydata,
    groupBy: ["id", "value"],
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



