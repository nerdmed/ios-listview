## iOS List View

A simple Templte that implements a iOS Style List View.
You can pass it an array with objects or strings as data.
In case you pass objects you can define a title and a class.
	
	var data = [
		{
			title: 'Element One',
			class: 'elem-1'
		},
		{
			title: 'Element Two',
			class: 'elem-2'
		}
	]


	{> iosListView data}