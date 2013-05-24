function (doc) {
	if (doc._id.substr(0, 9) === "applicant:") {
		emit(doc._id.substr(9), {
		"name": doc.name,
		"phone": doc.phone
		
		});
	}
};