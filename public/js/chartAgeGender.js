 var degreeChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.SchoolDegreeCount; });

   var svg = d3.select("#degreeChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataDegree.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.SchoolDegree); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.SchoolDegree; });
   });

   function type(d) {
     d.SchoolDegreeCount = +d.SchoolDegreeCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var majorChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.SchoolMajorCount; });

   var svg = d3.select("#majorChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataMajor.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.SchoolMajor); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.SchoolMajor; });
   });

   function type(d) {
     d.SchoolMajorCount = +d.SchoolMajorCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var hasStudentDebtChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.HasDebtCount; });

   var svg = d3.select("#hasStudentDebtChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataHasDebt.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.HasDebt); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.HasDebt; });
   });

   function type(d) {
     d.HasDebtCount = +d.HasDebtCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var employmentFieldChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.EmploymentFieldCount; });

   var svg = d3.select("#employmentFieldChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataEmploymentField.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.EmploymentField); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.EmploymentField; });
   });

   function type(d) {
     d.EmploymentFieldCount = +d.EmploymentFieldCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var currentIncomeChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.IncomeBracketCount; });

   var svg = d3.select("#currentIncomeChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataIncome.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.IncomeBracket); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.IncomeBracket; });
   });

   function type(d) {
     d.IncomeBracketCount = +d.IncomeBracketCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var numOfChildrenChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.ChildrenNumberCount; });

   var svg = d3.select("#numOfChildrenChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataChildrenNumber.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.ChildrenNumber); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.ChildrenNumber; });
   });

   function type(d) {
     d.ChildrenNumberCount = +d.ChildrenNumberCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

 var jobPreferenceChart = function(){
   var width = 200,
       height = 200,
       radius = Math.min(width, height) / 2;

   var color = d3.scale.ordinal()
       .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

   var arc = d3.svg.arc()
       .outerRadius(radius - 10)
       .innerRadius(0);

   var labelArc = d3.svg.arc()
       .outerRadius(radius - 40)
       .innerRadius(radius - 40);

   var pie = d3.layout.pie()
       .sort(null)
       .value(function(d) { return d.JobPrefCount; });

   var svg = d3.select("#jobPreferenceChart").append("svg")
       .attr("width", width)
       .attr("height", height)
     .append("g")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

   d3.csv("chartDataJobPref.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
         .data(pie(data))
       .enter().append("g")
         .attr("class", "arc");

     g.append("path")
       .attr("d", arc)
         .style("fill", function(d) { return color(d.data.JobPref); })
       .transition()
         .ease("bounce")
         .duration(2000)
         .attrTween("d", tweenPie);

     g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.JobPref; });
   });

   function type(d) {
     d.JobPrefCount = +d.JobPrefCount;
     return d;
   }

   function tweenPie(b) {
     b.innerRadius = 0;
     var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
     return function(t) { return arc(i(t)); };
   }
};

window.onload = function() {
    degreeChart();
    majorChart();
    hasStudentDebtChart();
    employmentFieldChart();
    currentIncomeChart();
    numOfChildrenChart();
    jobPreferenceChart();
};