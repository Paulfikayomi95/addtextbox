$(document).ready(function(){

	    var counter = 2;
		
	    $("#addButton").click(function () {
				
			if(counter>5){
		        alert("Only 5 textboxes allow");
		        return false;
		    }   
			
			var newTextBoxDiv = $(document.createElement('div')).attr("id", 'TextBoxDiv' + counter);
                newTextBoxDiv.html('<label>Textbox #'+ counter + ' : </label>' +
				'<input type="text" name="subj' + counter + 
				'" id="subj' + counter + '" value="" >'+
				'<input type="text" name="fee' + counter + 
				'" id="fee' + counter + '" value="" size="5">');
            
			newTextBoxDiv.appendTo("#TextBoxesGroup");
				
		    counter++;
	    });

	    $("#removeButton").click(function () {
		    if(counter==1){
		        alert("No more textbox to remove");
		        return false;
		    }   
	        counter--;
			
	        $("#TextBoxDiv" + counter).remove();
		});
		
		$("#getButtonValue").click(function () {
		
			var msg = '';
			for(i=1; i<counter; i++){
				msg += "\n " + $('#subj' + i).val();
                msg += $('#fee' + i).val();
			}
		   	alert(msg);
		});
		
  });