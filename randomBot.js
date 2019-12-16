class Bot {

    makeMove(gamestate) {
        let roundNum = gamestate.rounds.length;
        let dynaLeft1 = this.countDyna(gamestate)[0];
        let dynaLeft2 = this.countDyna(gamestate)[1];
        console.log("--------");
        console.log(dynaLeft1);
        console.log(dynaLeft2);
        let randomNum = Math.floor(Math.random() * 3);

        if (dynaLeft2 <= 0 && dynaLeft1 > 0) {
            return "D";
        } else if (randomNum == 0) {
            return "R";
        } else if (randomNum == 1) {
            return "P";
        } else {
            return "S";
        }

    }

    countDyna(gamestate) {
        let roundNum = gamestate.rounds.length;
        let dynaUsed1 = 0;
        let dynaUsed2 = 0;
        for (let r = 0; r < roundNum; r++) {
            if (gamestate.rounds[r].p1 == "D") {
                dynaUsed1 += 1;
            }
            if (gamestate.rounds[r].p2 == "D") {
                dynaUsed2 += 1;
            }
        }
        let dynaLeft1 = 100 - dynaUsed1;
        let dynaLeft2 = 100 - dynaUsed2;
        return [dynaLeft1, dynaLeft2];
    }


}

module.exports = new Bot();

var gamestateTest = {
    rounds: [{
            p1: "R",
            p2: "R"
        },
        {
            p1: "W",
            p2: "P"
        },
    ]
}

myDynabot = new Bot();
//myDynabot.makeMove(gamestateTest);

//console.log(myDynabot.chooseDyna(gamestateTest, 3, 1));
// for (let i = 0; i<10; i++) {
//     console.log(Math.floor(Math.random() * 3))
// }