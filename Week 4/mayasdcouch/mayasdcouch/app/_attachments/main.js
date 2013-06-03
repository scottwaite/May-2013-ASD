// Scott Waite ASD Term 1305 
$(document).on('pageinit');

//Refactored

// Create & Update

function Add() {
    $.couch.db('mayasd').saveDoc(list, {
            success: function () {
                var Applicant = JSON.stringify({
                        ID: $("#appID").val(),
                        Last: $("#appLast").val(),
                        First: $("#appFirst").val(),
                        Phone: $("#appPhone").val(),
                        Email: $("#appEmail").val()
                    });
                alert('The applicant has been saved!');
                // ...
            }
        });

    /*
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

*/

    // Destroy
    $.couch.db('mayasd').removeDoc({
            _id: id,
            _rev: rev
        }, {
            success: function (data) {
                alert('The applicant has been deleted.');
                // ...
            }
        });
    confirm("Are you sure you want to delete this applicant?");
    window.location.href = "#home";

    /*

    function Delete() {
        tbApplicants.splice(selected_index, 1);
        localStorage.setItem("tbApplicants", JSON.stringify(tbApplicants));
        alert("The Applicant was deleted.");
    }
*/

    //View
    $.couch.db('mayasd').view('mayasd/lists', {
            key: url['/mayasd/_all_docs?include_docs=true&start_key="applicant:"&end_key="applicant:zzzzz'],
            success: function (data) {
                $.each(data.rows, function (index, applicant) {
                        var lastName = applicant.doc.lastName;
                        var firstName = applicant.doc.firstName;
                        var phone = applicant.doc.phone;
                        var email = applicant.doc.email;
                        $('#applicantlist').append(
                            $('<li>').append(
                                $('<a>').attr("href", "#")
                                .text(title)));
                    });
                $('#applicantlist').listview('refresh');
            }
        });
    /*

$(document).on(function () {
        $.ajax({
                "url": '/mayasd/_all_docs?include_docs=true&start_key="applicant:"&end_key="applicant:zzzzz"',

                "dataType": "json",
                "success": function (data) {
                    $.each(data.rows, function (index, applicant) {
                            var lastName = applicant.doc.lastName;
                            var firstName = applicant.doc.firstName;
                            var phone = applicant.doc.phone;
                            var email = applicant.doc.email;
                            $('#applicantlist').append(
                                $('<li>').append(
                                    $('<a>').attr("href", "#")
                                    .text(title)));
                        });
                    $('#applicantlist').listview('refresh');
                }
            });

// Next set

var tbApplicants = localStorage.getItem("tbApplicants"); //Retrieve the stored data

    tbApplicants = JSON.parse(tbApplicants); //Converts string to object

    if (tbApplicants == null) //If there is no data, initialize an empty array
        tbApplicants = [];


*/