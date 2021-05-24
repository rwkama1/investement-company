class Company
{
    constructor(parrayperson)
    {
        this.arrayperson=parrayperson;
    }
    total_investement=()=>
    {
        let total=0;
        this.arrayperson.map(
            person=>
            {
                let inv=person.investement;
                total+=inv;
                
            }
        )
        return total;
    }
}
module.exports={Company}