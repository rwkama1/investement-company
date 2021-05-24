class Person
{
    constructor(pname,pinvestment)
    {
        this.name=pname;
        this.investement=pinvestment;
    }
    //Calculate Percentage
    percentage_investement=(total)=>
    {
        
        let inv=this.investement;
        let percentage=0;
        percentage=(inv/total)*100;
        return percentage
    }
}
module.exports={Person}
