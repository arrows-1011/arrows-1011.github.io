var User = (function () {
    function User(id, solved, solved_list) {
        this.id = id;
        this.solved = solved;
        this.solved_list = solved_list;
    }
    User.prototype.getID = function () {
        return this.id;
    };
    User.prototype.getSolved = function () {
        return this.solved;
    };
    User.prototype.getSolvedList = function () {
        return this.solved_list;
    };
    return User;
}());
function diffProbs() {
    var url;
    var objectURL = window.URL.createObjectURL(url);
    //var u1 = document.getElementById('user1').value;
    //document.getElementById('result').innerHTML = u1;
}
