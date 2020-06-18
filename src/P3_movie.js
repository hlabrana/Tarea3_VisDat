var data = [
    {id: "Game of Thrones [Tomatoes]", x: 1, y: 235000, value: 89, name:'Game of Thrones'},
    {id: "Sherlock [Tomatoes]",  x: 2, y: 730234, value: 78, name:'Sherlock'},
    {id: "Death Note [Tomatoes]", x: 3, y: 560000, value: 100, name:'Death Note'},
    {id: "Game of Thrones [Popcorn]",  x: 4, y:  210000, value: 86, name:'Game of Thrones'},
    {id: "Sherlock [Popcorn]", x: 5, y: 350000, value: 83, name:'Sherlock'},
    {id: "Death Note [Popcorn]", x: 6, y: 500000, value: 95, name:'Death Note'}
];


d3.select("#panel3")
.append('h4')
.text('Comparación entre series de TV [RottenTomatoes]')
.style("text-align","center")

new d3plus.Plot()
.data(data)
.groupBy("id")
.size("value")
.sizeMin(20)
.sizeMax(100)
.select('#panel3')
.height(500)
.width(700)
.render();