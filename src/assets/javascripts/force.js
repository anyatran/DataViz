var width = 1060;
var height = 600;

var force = d3.layout.force()
  .size([width, height])
  .charge(-100)
  .linkDistance(400)
  .on("tick", tick);

var drag = force.drag()
  .on("dragstart", dragstart);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var link = svg.selectAll(".link");
var node = svg.selectAll(".node");

d3.json("../javascripts/nodes.json", function (error, graph) {
  if (error) throw error;

  force
    .nodes(graph.nodes)
    .links(graph.links)
    .start();

  link = link.data(graph.links)
    .enter().append("line")
    .attr("class", "link");

  node = node.data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 100)
    .on("dblclick", dblclick)
    .call(drag);
});

function tick() {
  link.attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  node.attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}