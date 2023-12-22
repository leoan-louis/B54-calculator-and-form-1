
function submitForm() {
    var form = document.getElementById('myForm');
    var table = document.getElementById('dataTable');

    var newRow = table.insertRow(table.rows.length);
    for (var i = 0; i < form.elements.length - 1; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = form.elements[i].value;
    }

    // Clear form fields after submission
    form.reset();
}
