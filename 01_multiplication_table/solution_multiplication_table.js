/* eslint-disable no-unused-vars */
function multiplicationTable(rows, cols) {
    var rowarray = []
    var colarray = [];
    for (var i = 1; i <= cols; i++) {
        colarray.push(i);
    }
    for (var i = 1; i <= rows; i++) {
        rowarray.push(colarray.map(function(x) { return x * i; }));
    }
    return rowarray;
}
