// Adding rows to table
var emptyNewRow = "<tr class='trNewRow'>"; 
emptyNewRow = emptyNewRow + "<td class='tdID'>  </td>";

emptyNewRow = emptyNewRow + "<td class='tdTitle'><input type='text' class='txtTitle' placeholder='Enter Title'/></td>"

emptyNewRow = emptyNewRow + "<td class='tdDescription'><input type='text' class='txtDescription' placeholder='Enter Description'/></td>";
   
emptyNewRow = emptyNewRow + "<td class='tdPoint'><select class='txtPoint' name='points' placeholder='Enter Point'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></td>";

emptyNewRow = emptyNewRow + "<td class='tdIsDone'><input type='checkbox' class='txtIsDone' name='True' value='Yes'><label for='True'> Yes </label><input type='checkbox' class='txtIsDone' name='False' value='No' checked><label for='False'> No </label> </td>";    

emptyNewRow = emptyNewRow + "<td class='tdCreatedAt'><input type='datetime-local' class='txtCreatedAt' placeholder='Enter CreatedAt'/></td>";

emptyNewRow = emptyNewRow + "<td class='tdAction'><button class='btnSave'>Save</button> <button class='btnCancel'>Cancel</button> </td></tr>";


var editDeleteButtons ="<button class='btnEdit'>Edit</button> <button class='btnDelete'>Delete</button> ";
var updateCancelButtons ="<button class='btnSave'> Update </button>  <button class='btnSave'> Cancel </button> ";
var array = [];


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
    $(this).parent().parent().find(".tdID").html((Math.floor(Math.random() * 1000)));

    const title =  $(this).parent().parent().find(".txtTitle").val();
    $(this).parent().parent().find(".tdTitle").html(title); 

    const description =  $(this).parent().parent().find(".txtDescription").val();
    $(this).parent().parent().find(".tdDescription").html(description);  

    const point =  $(this).parent().parent().find(".txtPoint").val();
    $(this).parent().parent().find(".tdPoint").html(point);

    const isdone =  $(this).parent().parent().find(".txtIsDone").val();
    $(this).parent().parent().find(".tdIsDone").html(isdone);

    const createdat =  $(this).parent().parent().find(".txtCreatedAt").val();
    $(this).parent().parent().find(".tdCreatedAt").html(createdat);

    $(this).parent().parent().find(".tdAction").html(editDeleteButtons);

   

});
//Deleteing todos
$('#data').on('click', '.btnDelete', function () { 
    $(this).parent().parent().remove();
});
 
//Updating inputs
$('#data').on('click', '.btnEdit', function () { 
    const title =$(this).parent().parent().find(".tdTitle").html();
    $(this).parent().parent().find(".tdTitle").html("<input type='text' value='"+title+"' class='txtTitle' placeholder='Enter Title'/>"); 

    const description =$(this).parent().parent().find(".tdDescription").html();
    $(this).parent().parent().find(".tdDescription").html("<input type='text' value='"+description+"' class='txtDescription' placeholder='Enter Title'/>"); 

    const point =$(this).parent().parent().find(".tdPoint").html();
    $(this).parent().parent().find(".tdPoint").html("<select class='txtPoint' value = '"+point+"' name='points' placeholder='Enter Point'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select>"); 

    const isDone =$(this).parent().parent().find(".tdIsDone").html();
    $(this).parent().parent().find(".tdIsDone").html("<input type='checkbox' class='txtIsDone' name='True' value='Yes'><label for='True'> Yes </label><input type='checkbox' class='txtIsDone' name='False' value='No'><label for='False'> No </label>"); 

    const createdAt =$(this).parent().parent().find(".tdCreatedAt").html();
    $(this).parent().parent().find(".tdCreatedAt").html("<input type='datetime-local' value = '"+createdAt+"'class='txtCreatedAt' placeholder='Enter CreatedAt'/>"); 

    $(this).parent().parent().find(".tdAction").html(updateCancelButtons);
    

});

//Search by title and description. Matches will be colored red.
$( "#btnSearch" ).click(function(){

    let searchText = $('#searchText').val();
    let matches = 0;
    $(".tdTitle, .tdDescription").each((index, item) => {
        if (item.textContent.includes(searchText)) {
            $(item).css("color", "red");
            matches++;
        } else
            $(item).css("color", "black");
    });
    $("#result").text(matches + " matches found.");
    $("#searchText").val("");
});