$(function(){
	var data = {
	 "name": "CEO",
	 "value": 100,
	 "Salary": 450,
	 "children": [
	  {
	    "name": "VP Finance",
	    "value": 80,
	    "Salary": 420,
	    "children": [
	  	 {"name": "Accountant", "value": 50, "Salary": 110},
		 {"name": "Process Flow Expert", "value": 25, "Salary": 95},
		 {"name": "Consultant", "value": 25, "Salary": 80}
	    ]
	  },
	  {
	    "name": "Director of HR",
	    "value": 75,
	    "Salary": 225,
	    "children": [
	     {"name": "Feelings Person", "value": 15, "Salary": 35},
	     {"name": "Team Bonding Expert", "value": 50, "Salary": 45},
	     {"name": "Consultant", "value": 25, "Salary": 64}
	    ]
	  },
	  {
	    "name": "VP of Outreach",
	    "value": 72,
	    "Salary": 210,
	    "children": [
	     {"name": "Field Relations Expert", "value": 50, "Salary": 55},
	     {"name": "Consultant", "value": 25, "Salary": 48}
	    ]
	  }
	  ]
	 }
	 //Also have used 
	 var val = Tree().height(400).width(850).show('value');
	 var val2 = Tree().height(400).width(600).show('Salary').sticky(true);

	 var chartWrapper = d3.select("#my-div")
	 .datum(data).call(val);

	 var chartWrapper2 = d3.select("#my-div2").datum(data).call(val2)

	$("#button").on('click', function() {
		val.width(200).height(300).show('Salary').sticky(false);
		chartWrapper.datum(data).call(val);
	});
});