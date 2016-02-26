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

function diffProbs()
{
	var url: string;
	var objectURL = window.URL.createObjectURL(url);
	//var u1 = document.getElementById('user1').value;
	//document.getElementById('result').innerHTML = u1;
}