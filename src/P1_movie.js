var data = [
    {Geography: "Game of Thrones", Categoria: "Reviews", logy: 3.266, y: "1.682.108"},
    {Geography: "Sherlock", Categoria: "Reviews", logy: 2.884, y: "766.089"},
    {Geography: "Death Note", Categoria: "Reviews", logy: 2.327, y: "212.222"},

    {Geography: "Game of Thrones", Categoria: "Ranking", logy: 0.602, y: 4},
    {Geography: "Sherlock", Categoria: "Ranking", logy: 2.061, y: 115},
    {Geography: "Death Note", Categoria: "Ranking", logy: 2.640, y: 437},

    {Geography: "Game of Thrones", Categoria: "Rating", logy: 0.968, y: "9.3"},
    {Geography: "Sherlock", Categoria: "Rating", logy: 0.959, y: "9.1"},
    {Geography: "Death Note", Categoria: "Rating", logy: 0.954, y: "9.0"}
];

d3.select("#GotChart")
.append('h4')
.text('Comparación entre Series de TV [IMDb]')
.style('text-align','center')


new d3plus.Radar()
.select("#GotChart")
.config({
data: data,
groupBy: "Categoria",
metric: "Geography",
y: "logy",
axisConfig: {
    shapeConfig: {
    labelConfig: {
        fontColor: "green"
    },
    label: function(d) {
        return d.Geography.replace("Region", "").trim();
    }
    }
},
tooltipConfig: {
    tbody: [
        ["Valor: ", function(d) { return d["y"] }],
        ["Año: ", function(d) { return 2020 }]
    ]
}
})
.height(500)
.width(750)
.render();


d3.select('#GotChart')
.append('p')
.text('Nota: Los valores de cada categoría han sido linealizados aplicando Log10(x)')
.style('text-align','center')
.style('font-size','10px')
.style('font-weight','bold')