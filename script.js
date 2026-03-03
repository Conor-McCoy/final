const margin = {top: 50, right: 150, bottom: 50, left: 60},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("data.csv").then(data => {
    data.forEach(d => {
        d.year = +d.year;
    });

    const x = d3.scaleLinear().domain([2015, 2025]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x).tickFormat(d3.format("d")));
    svg.append("g").call(d3.axisLeft(y));

    // y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 15)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .text("Average Hours per Day");

    // colors
    const color = d3.scaleOrdinal()
        .domain(["GenZ", "Millennials", "GenX"])
        .range(["#69b3a2", "#404080", "#ff9900"]);

    // lines
    ["GenZ", "Millennials", "GenX"].forEach(gen => {
        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("stroke", color(gen))
            .attr("d", d3.line()
                .x(d => x(d.year))
                .y(d => y(d[gen]))
            );

        svg.append("text")
            .attr("transform", `translate(${width + 5},${y(data[data.length - 1][gen])})`)
            .attr("fill", color(gen))
            .text(gen);
    });


    const tooltip = d3.select("#tooltip");

// add points for hovering
    ["GenZ", "Millennials", "GenX"].forEach(gen => {
        svg.selectAll(`.dot-${gen}`)
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.year))
            .attr("cy", d => y(d[gen]))
            .attr("r", 5)
            .attr("fill", color(gen))
            .style("opacity", 0)
            .on("mouseover", (event, d) => {
                tooltip.style("opacity", 1)
                    .html(`<strong>${gen}</strong><br>Year: ${d.year}<br>Usage: ${d[gen]} hrs`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => tooltip.style("opacity", 0));

        svg.selectAll(`.visible-dot-${gen}`)
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.year))
            .attr("cy", d => y(d[gen]))
            .attr("r", 3)
            .attr("fill", "white")
            .attr("stroke", color(gen))
            .style("pointer-events", "none");
    });
});
