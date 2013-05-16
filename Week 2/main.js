// Scott Waite
// ASD Term 1305


$(document).ready(function () {



    $(function () {
        var operation = "A"; //"A"=Adding; "E"=Editing

        var selected_index = -1; //Index of the selected list item

        var tbApplicants = localStorage.getItem("tbApplicants"); //Retrieve the stored data

        tbApplicants = JSON.parse(tbApplicants); //Converts string to object

        if (tbApplicants === null) //If there is no data, initialize an empty array
            tbApplicants = [];

        function Add() {
            var Employee = JSON.stringify({
                ID: $("#empID").val(),
                Name: $("#empName").val(),
                Phone: $("#empPhone").val(),
                Email: $("#empEmail").val()
            });
            tbApplicants.push(Employee);

            alert("The employee record was saved.");
            return true;
        }

        function Edit() {
            tbApplicants[selected_index] = JSON.stringify({
                ID: $("#empID").val(),
                Name: $("#empName").val(),
                Phone: $("#empPhone").val(),
                Email: $("#empEmail").val()
            }); //Alter the selected item on the table
            localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
            alert("The employee record was edited.");
            operation = "A"; //Return to default value
            return true;
        }

        function Delete() {
            tbApplicants.splice(selected_index, 1);
            localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
            alert("Employee Deleted.");
        }

        function List() {
            $("#tblList").html("");
            $("#tblList").html(
                "<thead>" +
                "   <tr>" +
                "   <th></th>" +
                "   <th>Employee ID</th>" +
                "   <th>Name</th>" +
                "   <th>Phone</th>" +
                "   <th>Email</th>" +
                "   </tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>");
            for (var i in tbApplicants) {
                var emp = JSON.parse(tbApplicants[i]);
                $("#tblList tbody").append("<tr>" +
                    "   <td><img src='edit.png' alt='Edit" + i + "' class='btnEdit'/><img src='delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                    "   <td>" + emp.ID + "</td>" +
                    "   <td>" + emp.Name + "</td>" +
                    "   <td>" + emp.Phone + "</td>" +
                    "   <td>" + emp.Email + "</td>" +
                    "</tr>");
            }
        }

        $("#directoryForm").on("submit", function () {
            if (operation == "A") {
                return Add();
            } else {
                return Edit();
            }
        });

        List();

        $(".btnEdit").on("click", function () {

            operation = "E";
            selected_index = parseInt($(this).attr("alt").replace("Edit", ""), null);

            var emp = JSON.parse(tbApplicants[selected_index]);
            $("#empID").val(emp.ID);
            $("#empName").val(emp.Name);
            $("#empPhone").val(emp.Phone);
            $("#empEmail").val(emp.Email);
            $("#empID").attr("readonly", "readonly");
            $("#empName").focus();
        });

        $(".btnDelete").on("click", function () {
            selected_index = parseInt($(this).attr("alt").replace("Delete", ""), null);
            Delete();
            List();
        });
    });

});