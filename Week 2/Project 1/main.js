// Scott Waite ASD Term 1305 
$(document).on('pageinit');

$(function () {
    var operation = "A"; //"A"=Adding; "E"=Editing

    var selected_index = -1; //Index of the selected list item

    var tbApplicants = localStorage.getItem("tbApplicants"); //Retrieve the stored data

    tbApplicants = JSON.parse(tbApplicants); //Converts string to object

    if (tbApplicants == null) //If there is no data, initialize an empty array
        tbApplicants = [];

    function Add() {
        var Applicant = JSON.stringify({
            ID: $("#appID").val(),
            Last: $("#appLast").val(),
            First: $("#appFirst").val(),
            Phone: $("#appPhone").val(),
            Email: $("#appEmail").val()
        });
        tbApplicants.push(Applicant);
        localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
        alert("The applicant was saved.");
        return true;
    }

    function Edit() {
        tbApplicants[selected_index] = JSON.stringify({
            ID: $("#appID").val(),
            Last: $("#appLast").val(),
            First: $("#appFirst").val(),
            Phone: $("#appPhone").val(),
            Email: $("#appEmail").val()
        }); //Edit the selected item on the table
        localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
        alert("The applicant was edited.")
        operation = "A"; //Return to default value
        return true;
    }

    function Delete() {
        tbApplicants.splice(selected_index, 1);
        localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
        alert("The Applicant was deleted.");
    }

    function List() {
        $("#tblList").html("");
        $("#tblList").html(
            "<thead>" +
            "	<tr>" +
            "	<th></th>" +
            "	<th>Appointment:</th>" +
            "	<th>Last Name:</th>" +
            "	<th>First Name:</th>" +
            "	<th>Phone Number:</th>" +
            "	<th>Applicant Email Address:</th>" +
            "	</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>");
        for (var i in tbApplicants) {
            var app = JSON.parse(tbApplicants[i]);
            $("#tblList tbody").append("<tr>" +
                "	<td><img src='edit.gif' alt='Edit" + i + "' class='btnEdit'/><img src='delete.gif' alt='Delete" + i + "' class='btnDelete'/></td>" +
                "	<td>" + app.ID + "</td>" +
                "	<td>" + app.Last + "</td>" +
                "	<td>" + app.First + "</td>" +
                "	<td>" + app.Phone + "</td>" +
                "	<td>" + app.Email + "</td>" +
                "</tr>");
        }
    }

    $("#addApplicant").on("submit", function () {
        if (operation == "A")
            return Add();
        else
            return Edit();
    });

    List();

    $(".btnEdit").on("click", function () {

        operation = "E";
        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));

        var app = JSON.parse(tbApplicants[selected_index]);
        $("#appID").val(app.ID);
        $("#appLast").val(app.Last);
        $("#appFirst").val(app.First);
        $("#appPhone").val(app.Phone);
        $("#appEmail").val(app.Email);
        $("#appID").attr("readonly", "readonly");
        $("#appFirst").focus();
    });

    $(".btnDelete").on("click", function () {
        selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
        Delete();
        List();
    });
});