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
function user_search_api(id) {
    var url = "http://judge.u-aizu.ac.jp/onlinejudge/webservice/user?id=" + id;
    var res = document.createElementNS(url, null);
    document.getElementById('result').innerHTML = res.toString();
    return new User("gg", 1, Array());
}
function diff_probs() {
    var u1 = document.getElementById("user1").value;
    var u2 = document.getElementById("user2").value;
    var user1 = user_search_api(u1);
    // var user2: User = user_search_api(u2);
    //document.getElementById('result').innerHTML = u1 + " " + u2;
    //var url: string;
}
