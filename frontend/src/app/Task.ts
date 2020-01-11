
export class Task
{
    id:string;
    //title:string;
    upload:Blob;
    status:boolean;
    //date:Date;

constructor(upload:Blob)
{
    this.id="not set";
    //this.title=title;
    this.upload=upload;
    this.status=false;
    //this.date=new Date();
}
}