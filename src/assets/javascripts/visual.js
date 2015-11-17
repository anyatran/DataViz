var svg = d3.select("svg");
var circle = svg.selectAll("circle");

/**
 * Modify existing shape
 */
function simple1(shape) {
    shape.style("fill", "steelblue");
    shape.data([32, 57, 112]);
    shape.attr("r", function(d) { return Math.sqrt(d);});
    shape.attr("cx", function(d, i) { return i * 100 + 30;});
}

/**
 * Append new shapes
 * input: String
 */
function append_shape(shape) {
    shape.data([32, 57, 293]).enter().append("rect")
        .attr("width", function(d) { return d;})
        .attr("height", function(d, i) { return d/i;});
}
function main() {
    //simple1(circle);
    append_shape(circle);
}
main()
