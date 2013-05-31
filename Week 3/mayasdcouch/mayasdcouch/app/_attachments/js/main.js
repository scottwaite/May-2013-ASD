// Scott Waite ASD Term 1305 
$(document).on('pageinit');
    $.ajax({
        "url": "_view/applicants",
        "dataType": "json",
        "success": function(data) {
            $.each(data.rows, function(index, value){
                console.log(data);
                });
            }
        });
    });
