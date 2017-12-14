// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {

	function makeGrid() {

		//initialize constant and vars
		const max_height = 100; 
		const max_width = 100;
		let pixel_table = $('#pixel_canvas'); 
		let height = $('#input_height').val();
		let width = $('#input_width').val(); 

		//wanted to limit the height and width constant to 500
		try 
		{
	        if (height >= max_height) {
	        	throw "Height must be smaller than 100"; 
	        }
	        if (width >= max_width) {
	        	throw "Width must be smaller than 100"; 
	        }

		} 
		catch (err) {
			alert(err); 
			return;
		}

		pixel_table.empty(); //clear table when user press submit, prevents extra tables

		//create grid table 
		for (var rows = 0; rows < height; rows++) { 
			$(pixel_table).append('<tr></tr>'); //creating table rows 
			for (var cols = 0; cols < width; cols++) {
				$(pixel_table).children().last().append('<td></td>'); //creating table cols within row
			}
		}

		$('#pixel_canvas').on( "click", "td", function() {
			let color = $('#colorPicker').val(); //define color inside function so the color updates
	  		$(this).css('background', color);
		});
	}


	$('input[type="submit"]').click(function(e) {
			e.preventDefault(); //prevent form submit, without it would cause table to disappear
            makeGrid();
    });
});

