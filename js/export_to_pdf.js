function createPDF() {
    let pdf = document.getElementById("content");
    let opt = {
        margin: 1,
        filename: 'html2pdf-converted.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'l' }
    };
    html2pdf().set(opt).from(pdf).save();
}