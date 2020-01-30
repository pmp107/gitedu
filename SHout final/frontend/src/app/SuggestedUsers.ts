export class SuggestedUsers
{
    id:string;
    name:string;
    email:string;
    password:string;
    flag:boolean;
    public friends:SuggestedUsers[]
    //date:Date;

constructor(Email:string,Name:string,Friends?)
{
    this.id="not set";
    //this.title=title;
    this.email=Email;
    this.name=Name;
    this.flag=false;
    this.friends=Friends;
    //this.date=new Date();
}
}