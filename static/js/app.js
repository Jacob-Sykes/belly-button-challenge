// Declare url as constant
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Use sample_values as values for bar chart
let sample_values = data.map(function(item) {
    return item.metadata;
});


let otu_ids = data.map(function(id) {
    return id;
});

//Trace for sample data
let trace1 = {
    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: "h"
};
let traceData = [trace1];


// Apply title to the layout
let layout = {
    title: "OTUs"
};

// Plot the chart with data
Plotly.newPlot("bar", traceData, layout);


// 





















