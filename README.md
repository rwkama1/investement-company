# Investement Company

## Description

Three people want to invest their money to found a company, each of them invests a different amount, obtain the percentage that each one invests with respect to the total amount invested.

## Usage

```Javascript

 let Company=require("./Company").Company;
 let Person=require("./Person").Person;

 let arrayperson=[];
 arrayperson.push(new Person("Ghael",10.07));
 arrayperson.push(new Person("John",9.05)); 
 arrayperson.push(new Person("Asd",11.09)); 
 let company=new Company(arrayperson);
 
 let total=company.total_investement();

 show_percentage_investement=(ptotal)=>
 {
     arrayperson.map(
         p=>{
            
            console.log("The percentage for "+p.name+" is "+p.percentage_investement(ptotal)+"%");
            console.log("                        ");
         }
     )
 }
 show_percentage_investement(total);
 console.log("The total invested is: USD "+ total);

```