function sayHello(name)   {
    console.log(`Hello ${name}!`);          
}


sayHello("Steve");

function generateReport(title, total, discount) {
    return `
        REPORT: ${title}
        Total: ${total}
        Amount: ${total * discount}
    `;
}

let savedSteve  = generateReport("StevesReport", 10, 0.5);
console.log(savedSteve);