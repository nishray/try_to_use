Tree = function() {
	// initialize default values (parameters)
	var margin = {top: 50, left: 10, bottoom: 10, right: 10};
	var width = 800;
	var height = 500;
	var show = 'value';
	var color = d3.scale.category10();
	var sticky = true;


	var treemap = d3.layout.treemap().sticky(sticky);

	// constructor
	var my = function(selection) {
		selection.each(function(data) {

			treemap.size([width, height])
					.value(function(d) { return d[show]; }) 
					.children(function(d) { return d.children; });

			var dom = d3.select(this);
			var svg = dom.selectAll("svg").data([treemap.nodes]);

			var svgEnter = svg.enter().append("svg")
							.style("width", width)
							.style("height", height)
							.style("position", "relative")
							.style("left", margin.left + "px")
							.style("top", margin.top + "px");
			
			var mySvg = dom.select('svg');

			svg.transition()
				.duration(1500)
				.style('width', width + "px")
				.style('height', height + "px");

			var nodes = mySvg.selectAll(".node").data(treemap.nodes);

			var r = nodes.enter().append("rect")
					//.attr("text", function(d) { return d.children ? null : d.name; })
					//.style("position", "absolute")
					.style("display", "inline")
					.attr("class", "node")
					.attr("x", function(d) { return d.x; })
					.attr("y", function(d) { return d.y; })
					.attr("width", function(d) { return d.dx; })
					.attr("height", function(d) { return d.dy; })
					.attr("fill", function(d) { return d.children ? null : color(d.parent.name); })
					.attr("stroke", '#fff');

			// give a transition property
			nodes.transition()
					.duration(1500)
					.attr("x", function(d) { return d.x; })
					.attr("y", function(d) { return d.y; })
					.attr("width", function(d) { return d.dx; })
					.attr("height", function(d) { return d.dy; })
					.attr("fill", function(d) { return d.children ? null : color(d.parent.name); });


			var texts = mySvg.selectAll("text").data(treemap.nodes);

			var t = texts.enter().append("text")
						.attr("x", function(d) { console.log(d); return d.x + d.dx / 2 })
						.attr("y", function(d) { return d.y + d.dy / 2 })
						.style("color", "#fff")
						.attr("text-anchor", "middle")
						.text(function(d) { return d.children ? null : d.name; });		

			texts.exit().remove();

			texts.transition()
					.duration(1500)
					.attr("x", function(d) { return d.x + d.dx / 2 })
					.attr("y", function(d) { return d.y + d.dy / 2 })
					.style("color", "#fff")
					.attr("text-anchor", "middle")
					.text(function(d) { return d.children ? null : d.name; });

		});
	};

	my.width = function(value) {
		if(!arguments.length) return width;
		width = value;
		return my;
	};

	my.height = function(value) {
		if(!arguments.length) return height;
		height = value;
		return my;
	};

	my.show = function(value) {
		if(!arguments.length) return show;
		show = value;
		return my;
	};

	my.sticky = function(value) {
		if(!arguments.length) return sticky;
		sticky = value;
		return my;
	}

	my.color = function(value) {
		if(!arguments.length) return color;
		color = value;
		return my;
	};

	return my;
};



