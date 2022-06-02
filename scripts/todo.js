// Adding rows to table
var emptyNewRow = "<tr class='trNewRow'>"; 
emptyNewRow = emptyNewRow + "<td class='tdID'>  </td>";

emptyNewRow = emptyNewRow + "<td class='tdTitle'><input type='text' class='txtTitle' placeholder='Enter Title'/></td>"

emptyNewRow = emptyNewRow + "<td class='tdDescription'><input type='text' class='txtDescription' placeholder='Enter Description'/></td>";
   
emptyNewRow = emptyNewRow + "<td class='tdPoint'><select class='txtPoint' name='points' placeholder='Enter Point'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></td>";

emptyNewRow = emptyNewRow + "<td class='tdIsDone'><input type='checkbox' class='txtIsDone' name='True' value='Yes'><label for='True'> Yes </label><input type='checkbox' class='txtIsDone' name='False' value='No'><label for='False'> No </label> </td>";    

emptyNewRow = emptyNewRow + "<td class='tdCreatedAt'><input type='datetime-local' class='txtCreatedAt' placeholder='Enter CreatedAt'/></td>";

emptyNewRow = emptyNewRow + "<td class='tdAction'><button>Save</button> <button>Cancel</button> </td></tr>";


$("#btnAdd").click(function () { 
    if ($("#data tbody").children().children().length == 1) {
        $("#data tbody").html("");
    }
    
    // Appending dynamic string to table tbody
    $("#data tbody").append(emptyNewRow); 
});

