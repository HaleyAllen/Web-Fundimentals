console.log("page loaded...");
// ----------------------------------------------------------------------
var Name = "Jane Doe"

function editProfile(element) {
    Name = "My Name";
    document.getElementById("Name").innerHTML = Name;
};
// ---------------------------------------------------------------------
var requestNum = 2

function closeOne(element) {
    var div = document.getElementById("requestOne").innerHTML = requestOne;
    div.style.display = 'none'

    requestNum -= 1
    document.getElementById("requestNum").innerHTML = requestNum;
};
// ------------------------------------------------------------------------
var conNum = 476

function acceptOne(element) {
    var div = document.getElementById("requestOne").innerHTML = requestOne;
    div.style.display = 'none'

    requestNum -= 1
    document.getElementById("requestNum").innerHTML = requestNum;

    conNum += 1
    document.getElementById("conNum").innerHTML = conNum;
};
// -----------------------------------------------------------------------------

function closeTwo(element) {
    var div = document.getElementById("requestTwo").innerHTML = requestTwo;
    div.style.display = 'none'

    requestNum -= 1
    document.getElementById("requestNum").innerHTML = requestNum;
};
// --------------------------------------------------------------------------------

function acceptTwo(element) {
    var div = document.getElementById("requestTwo").innerHTML = requestTwo;
    div.style.display = 'none'

    requestNum -= 1
    document.getElementById("requestNum").innerHTML = requestNum;

    conNum += 1
    document.getElementById("conNum").innerHTML = conNum;
};