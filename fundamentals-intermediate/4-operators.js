// && and || demo
demo = {
    and: ()=>{
        if(5=== 5 && 6===7){
            console.log(true);
        } else {
            console.log(false);
        }
    },
    or: ()=>{
        // let userSetting = {name:'Hoe'};
        let userSetting = null;
        let defaultSettings = {name:'Default'};

        console.log(userSetting || defaultSettings);
        console.log(userSetting && defaultSettings);
    },
    relationalOperator: ()=>{
        let s1 = 'Zoo';
        let s2 = 'alphabet';

        if(s1 < s2){
            console.log(true);
        } else {
            console.log(false);
        }
    },
    conditionalOperator: ()=>{
        console.log((5>4 ? 'yes': 'no'));
        console.log((5>6 ? 'yes': 'no'));
    },
    assignmentOperators: ()=>{
        let year = 1964;
        console.log('Original: ',year);
        year += 10;
        console.log('+= 10',year);
        year -= 20;
        console.log('-= 20',year);
    }
}


// demo.and();
// demo.or();
// demo.relationalOperator();
// demo.conditionalOperator();
demo.assignmentOperators();