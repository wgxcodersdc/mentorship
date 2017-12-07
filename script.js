// Do not modify //
//This function uses DataTables library to generate a sortable table from mentor data
$(document).ready(function() {
    $('#example').DataTable( {
        "data": mentorData,
    } );
} );
//---------------------------------------------//

//To add yourself to the mentor directory add an array with your information
//The format of the array is as follows:
//
// [Name,
//  Job Title,
//  Bio,
//  Subjects you're willing to mentor people in
//  Are you currently taking on new mentees?
//  Location you're willing to meet in: Maryland, Virginia, DC, or online
//  Way to contact you]
//---------------------------------------------//
var mentorData = [
    [
        "Ksenia Coulter",
        "Developer",
        "I'm a web developer at the Washington Post",
        "Javascript, HTML, CSS, Job Search",
        "Yes",
        "Maryland, DC, Online",
        "kseniacoulter AT gmail.com"
    ]
]
