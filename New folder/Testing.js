function testSleepQuality() {
    let name = "testSleepQuality";
    let hours = 12;
    let hr    = 60;
    let exp   = 100;
    let res   = sleepQuality(hours, hr);

    showTestResult(name, [hours, hr], exp, res);
}

function testSleepTip() {
    
    let name = "testSleepTip";
    let topic = "vitamins";
    let exp   = "try 200mg of mag maltate before bed!";
    let res   = sleepTip(topic);

    showTestResult(name, [topic], exp, res);
}


testSleepQuality();
testSleepTip();


function sleepQuality(hours, hr) {
    return hours * 10 - hr/3;
}

function sleepTip(topic) { 
    const db = {
        vitamins: "try 200mg of mag maltate before bed!"
    };


    return db[topic];
}



function showTestResult(name, inputs, expected, result) {
    if(result != expected) {
        console.log(`
            FAIL:     ${name}
            ------------------------------
            Input 1:  ${inputs}, 
            Expected: ${expected} 
            Observed: ${result}
            ------------------------------
        `);
    } else {
        console.log(`
            PASS:     ${name}
            ------------------------------
        `);
    }
}