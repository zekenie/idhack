console.log(patient_id);
console.log("dafadsfadsfa");
var notesContainer = $("#viewnotes");
var historyContainer = $("#history");
var labsContainer = $("#viewlabs");
var vitalsContainer = $("#vitalsContainer");
var perscriptionsContainer = $("#perscriptions");
$.get("/notes?patient_id="+patient_id, function(notes){
    notes.forEach(function(note) {
        notesContainer.prepend("Created at:" + note.createdAt + "<br>"+ note.note);
    });


});
$.get("/labs?patient_id="+patient_id, function(labs){
    labs.forEach(function(lab) {
        labsContainer.append("<tr>\
        							<td>" + lab.na + "</td>\
        							<td>" + lab.k + "</td>\
        							<td>" + lab.cl + "</td>\
        							<td>" + lab.hco3 + "</td>\
        							<td>" + lab.bun + "</td>\
        							<td>" + lab.creatinine + "</td>\
        							<td>" + lab.glucose + "</td>\
        							<td>" + lab.createdAt + "</td>\
    							</tr>");
    });
});

$.get("/vitals?patient_id="+patient_id,function(vitals) {
	vitals.forEach(function(vital) {
		vitalsContainer.append("<tr>\
									<td>" + vital.systolic + '/' + vital.diastolic + "</td>\
									<td>" + vital.hr + "</td>\
									<td>" + vital.temp + "</td>\
									<td>" + vital.spo + "</td>\
									<td>" + vital.createdAt + "</td>\
								</tr>");
	});
});