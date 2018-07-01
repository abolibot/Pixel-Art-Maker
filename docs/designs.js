// Select size input
	var width;
	var height;
	$("#inputWeight").change(function(){
		width = $("#inputWeight").val();
		return width;
	});
	$("#inputWeight").change(function(){
		height = $("#inputHeight").val();
		return height;
	});

// When size is submitted by the user, call makeGrid()
	function makeGrid(){
		for (var i = 0; i < height; i++){
			if (i === 0){
				$("#pixelCanvas").html("<tr> </tr>");
			} else {
				$("tr").last().after("<tr> </tr>");
			}
			
			for (var j = 0; j < width; j++){
				if (j === 0){
					$("tr").last().html("<td> </td>");
				} else {
					$("td").last().after("<td> </td>");
				}
				
			}
		}
	}

	$("#sizePicker").submit(function(event){
		//just in case user doen't change size input, input is taken on submission
		width = $("#inputWeight").val();
		height = $("#inputHeight").val();
		makeGrid();

		$("td").hover(function(){
			$(this).css("cursor", "pointer");
		});


		//code for filling each cell with the selected color when clicked
		$("td").click(function(){
			$(this).css("background-color", function(){
				//saves the value of #colorPicker in variable color
				var color = $("#colorPicker").val();
				return color;
			});
		});

		//code to remove background color on double click
		$("td").dblclick(function(){
			$(this).css("background-color", "white");
		});

		
		event.preventDefault();
	}); 