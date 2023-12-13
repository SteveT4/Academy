class LoanApp {
    constructor(a, s, i, t) {                                                   
        this.amount =  a;
        this.score  =  s;
        this.income =  i;
        this.term   =  t;
    }


    isApproved() {
        return ((this.amount / this.income) < 0.15) && (this.score > 550);
    }

    monthlyPayment() {
        return (this.amount / this.term);
}


}

const alice  = new LoanApp(1000, 700, 40_000, 24);                              
const eve    = new LoanApp(2000, 600, 40_000, 36);                            
const bob    = new LoanApp(3000, 500, 40_000, 24);                             


console.log(alice.isApproved(), alice.monthlyPayment());        
console.log(eve.isApproved(), eve.monthlyPayment());          
console.log(bob.isApproved(), bob.monthlyPayment());         
