var Grade = (function () {
    function Grade(A, B, C, F) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.F = F;
    }
    Grade.prototype.calcGPA = function () {
        var total = this.A + this.B + this.C + this.F;
        return ((4 * this.A + 3 * this.B + 2 * this.C) / total).toString();
    };
    return Grade;
}());

function calc() {
    var A = Number(document.getElementById('A').value);
    var B = Number(document.getElementById('B').value);
    var C = Number(document.getElementById('C').value);
    var F = Number(document.getElementById('F').value);
    var grade = new Grade(A, B, C, F);
    document.getElementById('result').innerHTML = "Your GPA is " + grade.calcGPA();
}
