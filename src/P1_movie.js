var data = [
    {Geography: "Game of Thrones", Categoria: "Reviews", logvalue: 3.266, value: "1.682.108"},
    {Geography: "Sherlock", Categoria: "Reviews", logvalue: 2.884, value: "766.089"},
    {Geography: "Death Note", Categoria: "Reviews", logvalue: 2.327, value: "212.222"},

    {Geography: "Game of Thrones", Categoria: "Ranking", logvalue: 0.602, value: 4},
    {Geography: "Sherlock", Categoria: "Ranking", logvalue: 2.061, value: 115},
    {Geography: "Death Note", Categoria: "Ranking", logvalue: 2.640, value: 437},

    {Geography: "Game of Thrones", Categoria: "Rating", logvalue: 0.968, value: "9.3"},
    {Geography: "Sherlock", Categoria: "Rating", logvalue: 0.959, value: "9.1"},
    {Geography: "Death Note", Categoria: "Rating", logvalue: 0.954, value: "9.0"}
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
value: "logvalue",
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
        ["Valor: ", function(d) { return d["value"] }],
        ["Año: ", function(d) { return 2020 }]
    ]
}
})
.height(500)
.width(700)
.render();


d3.select('#GotChart')
.append('p')
.text('Nota: Los valores de cada categoría han sido linealizados aplicando Log10(x)')
.style('text-align','center')
.style('font-size','10px')
.style('font-weight','bold')