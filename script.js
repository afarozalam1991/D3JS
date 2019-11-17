//Appending a paragraph and changing it's color
// d3.select("body")
// .append("p")
// .style("color", "red")
// .text("Hello World!");
//DataArray
var dataArray=[20,40,60]
//Creating a Canvas
var canvas= d3.select("body")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);
//Drawing a circle
// var circle= canvas.append("circle")
//                 .attr("cx", 200)
//                 .attr("cy", 250)
//                 .attr("r", 50)
//                 .attr("fill", "red");
// //Drawing a rectangle
// var rect= canvas.append("rect")
//                 .attr("width", 50)
//                 .attr("height", 70);
// //Drawing a line
// var line=canvas.append("line")
//                 .attr("x1", 0)
//                 .attr("y1", 100)
//                 .attr("x2", 400)
//                 .attr("y2", 450)
//                 .attr("stroke", "green")
//                 .attr("stroke-width", 10);
//Drawing a bar graph
var dataArray=[12, 24, 36];
var width= 500;
var height= 500;
var widthScale= d3.scaleLinear()
                    .domain([0, 60])
                    .range([0, width]);
var color= d3.scaleLinear()
                    .domain([0, 60])
                    .range(["red", "blue"])

var bar=canvas.selectAll("rect")
                .data(dataArray)
                .enter()
                        .append("rect")
                        .attr("width", (d)=>widthScale(d))
                        .attr("height", 50)
                        .attr("fill", (d)=>color(d) )
                        .attr("y", (d, i)=> i*100)



