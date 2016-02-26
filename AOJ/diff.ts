class User {
	private id: string;
	private solved: number;
	private solved_list: Array<string>;

	constructor(id: string, solved: number, solved_list: Array<string>) {
		this.id = id;
		this.solved = solved;
		this.solved_list = solved_list;
	}

	public getID(): string
	{
		return this.id;
	}

	public getSolved(): number
	{
		return this.solved;
	}

	public getSolvedList(): Array<string>
	{
		return this.solved_list;
	}
}

function user_search_api(id: string) : User
{
	var url: string = "http://judge.u-aizu.ac.jp/onlinejudge/webservice/user?id=" + id;
	var res = document.createElementNS(url, null);
	document.getElementById('result').innerHTML = res.toString();
	return new User("gg", 1, Array<string>());
}

function diff_probs()
{
	var u1: string = (<HTMLInputElement>document.getElementById("user1")).value;
	var u2: string = (<HTMLInputElement>document.getElementById("user2")).value;
	var user1: User = user_search_api(u1);
	// var user2: User = user_search_api(u2);
	//document.getElementById('result').innerHTML = u1 + " " + u2;

	//var url: string;
}