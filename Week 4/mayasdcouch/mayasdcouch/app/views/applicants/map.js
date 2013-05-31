function (doc) {
	if (doc._id.substr(0, 10) === "applicant:") {
		emit(doc._id.substr(10), {
		"lastName": doc.lastName,
		"firstName": doc.firstName,
		"phone": doc.phone,
		"email": doc.email
		});
	}
};