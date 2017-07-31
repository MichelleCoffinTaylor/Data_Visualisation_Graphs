//	Load Charts and the corechart package
google.charts.load('current', { 'packages' :['corechart']});
	//	Draw the pie chart for (Kids Favourite Fruit)
	google.charts.setOnLoadCallback(drawFruitChart);
	//	Draw the pie chart for (Kids Favourite Vegetables)
	google.charts.setOnLoadCallback(drawVegetableChart); 
	function drawFruitChart() {
		//	Define the chart to be drawn.
		//	All data must be wrapped in a JavaScript class called
		//	google.visualisation.DataTable.

		//	A data table is a two dimensional table with rows and columns where each
		//	column has a datatype an optional ID
		var data = new google.visualization.DataTable();
		//	Data Name
		data.addColumn('string', 'Element');
		//	Data/Percentage
		data.addColumn('number', 'Percentage');
		data.addRows([
			//	Data in here will be displayed in the pie chart.
			//	all of the data must add to 1
			['Apples', 0.78],
			['Bananas', 0.11],
			['Pears', 0.10],
			['Oranges', 0.01]
		]);

		//	Setting the chart options/styling the chart
		var options = {
			title: 'Kids favourite fruit graph',
			colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f'],
			width: 600,
			height: 300
		};

		// Instantiate and draw the chart. and adding in the customised options
		var chart = new google.visualization.PieChart(document.getElementById('FruitChart'));
		//	When giving the chart options after chart.draw add (data, options instead of data, null)
		chart.draw(data, options);
}
function drawVegetableChart() {
		//	Define the chart to be drawn.
		//	All data must be wrapped in a JavaScript class called
		//	google.visualisation.DataTable.

		//	A data table is a two dimensional table with rows and columns where each
		//	column has a datatype an optional ID
		var data = new google.visualization.DataTable();
		//	Data Name
		data.addColumn('string', 'Element');
		//	Data/Percentage
		data.addColumn('number', 'Percentage');
		data.addRows([
			//	Data in here will be displayed in the pie chart.
			//	all of the data must add to 1
			['Lettuce', 0.50],
			['Tomato', 0.20],
			['Carrot', 0.9],
			['Capsicum', 0.21]
		]);

		//	Setting the chart options/styling the chart
		var options = {
			title: 'Kids favourite vegetable graph',
			colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f'],
			width: 600,
			height: 300
		};

		// Instantiate and draw the chart. and adding in the customised options
		var chart = new google.visualization.BarChart(document.getElementById('VegetableChart'));
		//	When giving the chart options after chart.draw add (data, options instead of data, null)
		chart.draw(data, options);
}