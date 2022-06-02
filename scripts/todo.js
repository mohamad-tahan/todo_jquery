// Adding rows to table
var emptyNewRow = "<tr class='trNewRow'>"; 
emptyNewRow = emptyNewRow + "<td class='tdID'>  </td>";

emptyNewRow = emptyNewRow + "<td class='tdTitle'><input type='text' class='txtTitle' placeholder='Enter Title'/></td>"

emptyNewRow = emptyNewRow + "<td class='tdDescription'><input type='text' class='txtDescription' placeholder='Enter Description'/></td>";
   
emptyNewRow = emptyNewRow + "<td class='tdPoint'><select class='txtPoint' name='points' placeholder='Enter Point'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></td>";

emptyNewRow = emptyNewRow + "<td class='tdIsDone'><input type='checkbox' class='txtIsDone' name='True' value='Yes'><label for='True'> Yes </label><input type='checkbox' class='txtIsDone' name='False' value='No'><label for='False'> No </label> </td>";    

emptyNewRow = emptyNewRow + "<td class='tdCreatedAt'><input type='datetime-local' class='txtCreatedAt' placeholder='Enter CreatedAt'/></td>";

emptyNewRow = emptyNewRow + "<td class='tdAction'><button class='btnSave'>Save</button> <button class='btnCancel'>Cancel</button> </td></tr>";


var editDeleteButtons ="<button class='btnEdit'>Edit</button> <button class='btnDelete'>Delete</button> ";



$("#btnAdd").click(function () { 
    if ($("#data tbody").children().children().length == 1) {
        $("#data tbody").html("");
    }
    
    // Appending dynamic string to table tbody
    $("#data tbody").append(emptyNewRow); 
});

// Saving inputs into table
$('#data').on('click', '.btnSave', function () {
    const id =  $("#data tbody").children().length;
    $(this).parent().parent().find(".tdID").html(""+id+"");

    const title =  $(this).parent().parent().find(".txtTitle").val();
    $(this).parent().parent().find(".tdTitle").html(""+title+""); 

    const description =  $(this).parent().parent().find(".txtDescription").val();
    $(this).parent().parent().find(".tdDescription").html(""+description+"");  

    const point =  $(this).parent().parent().find(".txtPoint").val();
    $(this).parent().parent().find(".tdPoint").html(""+point+"");

    const isdone =  $(this).parent().parent().find(".txtIsDone").val();
    $(this).parent().parent().find(".tdIsDone").html(""+isdone+"");

    const createdat =  $(this).parent().parent().find(".txtCreatedAt").val();
    $(this).parent().parent().find(".tdCreatedAt").html(""+createdat+"");

    $(this).parent().parent().find(".tdAction").html(editDeleteButtons);

});

$('#data').on('click', '.btnCancel', function () { 
    $(this).parent().parent().remove();
});
 
