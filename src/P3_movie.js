var data = [
    {id: "Game of Thrones [Tomatoes]", x: 4, y:  7, value: 89, name:'Game of Thrones'},
    {id: "Sherlock [Tomatoes]",  x: 5.6, y:  2, value: 78, name:'Sherlock'},
    {id: "Death Note [Tomatoes]", x: 5, y:  7, value: 100, name:'Death Note'},
    {id: "Game of Thrones [Popcorn]",  x: 5, y:  21, value: 86, name:'Game of Thrones'},
    {id: "Sherlock [Popcorn]", x: 6, y: 21, value: 83, name:'Sherlock'},
    {id: "Death Note [Popcorn]", x: 6, y: 13, value: 95, name:'Death Note'}
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