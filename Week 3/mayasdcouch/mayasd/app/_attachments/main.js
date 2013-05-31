// Scott Waite ASD Term 1305 
$(document).on('pageinit');

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