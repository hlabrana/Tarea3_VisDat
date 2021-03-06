var mydata = [
    {"Group": "Tiempo Canciones [min]","Sub-Group": "Hilary Hahn","y": 1166,year:2020,color:"#217BED"},
    {"Group": "Tiempo Canciones [min]","Sub-Group": "Drake","y": 795,year:2020,color:"#217BED"},
    {"Group": "Tiempo Canciones [min]","Sub-Group": "Bad Bunny","y": 181,year:2020,color:"#217BED"},

    {"Group": "Cantidad Canciones","Sub-Group": "Hilary Hahn.","y": 186,year:2020,color:"#D80909"},
    {"Group": "Cantidad Canciones","Sub-Group": "Drake.","y": 196,year:2020,color:"#D80909"},
    {"Group": "Cantidad Canciones","Sub-Group": "Bad Bunny.","y": 53,year:2020,color:"#D80909"},

    {"Group": "Acousticness","Sub-Group": "Hilary_Hahn","y": 0.908,year:2020,color:"#21ED8D"},
    {"Group": "Acousticness","Sub-Group": ".Drake","y": 0.399,year:2020,color:"#21ED8D"},
    {"Group": "Acousticness","Sub-Group": "Bad_Bunny","y": 0.353,year:2020,color:"#21ED8D"}
];

d3.select("#hilarychart")
.append('h4')
.text('Comparación entre Artistas musicales [Spotify]')
.style("text-align","center")


new d3plus.Treemap()
.select("#hilarychart")
.config({
    data: mydata,
    groupBy: ["Group", "Sub-Group"],
    sum: function(d) {
    return d["y"];
    },
    tooltipConfig: {
    tbody: [
        ["Acumulado", function(d) { return d["y"] }], 
        ["Año", function(d) { return d.year }]
    ]
    },
    tile: d3.treemapDice
})
.height(500)
.width(700)
.shapeConfig({
    fill: function(d) {
        return d.color;
    }
})
.render();

