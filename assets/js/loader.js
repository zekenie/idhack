console.log(patient_id);
console.log("dafadsfadsfa");
var notesContainer = $("#viewnotes");
var historyContainer = $("#history");
var labsContainer = $("#viewlabs");
var perscriptionsContainer = $("#perscriptions");
$.get("/notes?patient_id="+patient_id, function(notes){
    notes.forEach(function(note) {
        notesContainer.prepend("Created at:" + note.createdAt + "<br>"+ note.note);
    });


});
$.get("/labs?patient_id="+patient_id, function(labs){
    labs.forEach(function(lab) {
        labsContainer.prepend("Created at:" + lab.createdAt + "<br>"+ lab.lab);
    });

});
