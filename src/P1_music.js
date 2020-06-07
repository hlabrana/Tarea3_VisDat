//Code grafico Hilary Hahn.csv

//METADATA: Formato de Tipo
d3.csv("src/data/Hilary_Hahn.csv", function(data) {
    data.forEach(function(d){
        d.ID = +d.ID;
        d.track_number = +d.track_number;
        d.acousticness = +d.acousticness;
        d.danceability = +d.danceability;
        d.energy = +d.energy;
        d.instrumentalness = +d.instrumentalness;
        d.liveness = +d.liveness;
        d.loudness = +d.loudness;
        d.speechiness = +d.speechiness;
        d.tempo = +d.tempo;
        d.valence = +d.valence;
        d.popularity = +d.popularity;
    });

    // Sizing variables for our chart. These are saved as variables as they will be used in calculations.
    var chartWidth = 800
    var chartHeight = 500
    var padding = 2

    // We want our our bars to take up the full height of the chart, so, we will apply a scaling factor to the height of every bar.
    var heightScalingFactor = chartHeight / getMax(data)

    // Here we are creating the SVG that will be our chart.
    var svg = d3
    .select('#hilarychart')           // I'm starting off by selecting the container.
        .append('svg')               // Appending an SVG element to that container.
        .attr('width', chartWidth)   // Setting the width of the SVG.
        .attr('height', chartHeight) // And setting the height of the SVG.

    // The next step is to create the rectangles that will make up the bars in our bar chart.
    svg
    .selectAll('rect')                                          // I'm selecting all of the rectangles in the SVG (note that at this point, there actually aren't any, but we'll be creating them in a couple of steps).
    .data(data)                                              // Then I'm mapping the dataset to those rectangles.
    .enter()                                                    // This step is important in that it allows us to dynamically create the rectangle elements that we selected previously.
        .append('rect')                                           // For each element in the dataset, append a new rectangle.
        .attr('x', function (value, index) {                    // Set the X position of the rectangle by taking the index of the current item we are creating, multiplying it by the calculated width of each bar, and adding a padding value so we can see some space between bars.
            return (index * (chartWidth / data.length)) + padding
            })
        .attr('y', function (value, index) {                    // Set the rectangle by subtracting the scaled height from the height of the chart (this has to be done becuase SVG coordinates start with 0,0 at their top left corner).
            return chartHeight - (value.tempo * heightScalingFactor)
        })
        .attr('width', (chartWidth / data.length) - padding) // The width is dynamically calculated to have an even distribution of bars that take up the entire width of the chart.
        .attr('height', function (value, index) {               // The height is simply the value of the item in the dataset multiplied by the height scaling factor.
            return value.tempo * heightScalingFactor
        })
        .attr('fill', 'blue')                                   // Sets the color of the bars.

    /**
     *  Gets the maximum value in a collection of numbers.
     */
    function getMax(collection) {
    var max = 0

    collection.forEach(function (element) {
        max = element.tempo > max ? element.tempo : max
    })

    return max
    }

});


