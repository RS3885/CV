//
// start here
//
let iFramePdf = document.getElementById("pdfLoad");
loadPDF('./RS Resume.pdf');

function loadPDF(url) {

/*alert(url);*/
iFramePdf.src = url;

}