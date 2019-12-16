class Bot {

    makeMove(gamestate) {
        let roundNum = gamestate.rounds.length;
        let dynaLeft1 = this.countDyna(gamestate)[0];
        let dynaLeft2 = this.countDyna(gamestate)[1];
        let sufficentDyna1 = this.chooseDyna1(gamestate, dynaLeft1);
        let insufficientDyna2 = this.chooseDyna2(gamestate, dynaLeft2)
        console.log("--------");
        console.log(dynaLeft1);
        console.log(dynaLeft2);
        let randomNum1 = Math.floor(Math.random() * 3);
        let randomNum2 = Math.floor(Math.random() * 3);


        if (dynaLeft1 > 1 && dynaLeft2 < 3) {
            return "D";
        } else if (randomNum1 == 0) {
            return "R";
        } else if (randomNum1 == 1) {
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

    chooseDyna1(gamestate, dynaLeft1) {
        let roundNum = gamestate.rounds.length;
        let approxTotRounds = 2000;
        let dynaPerRound = 100 / 2000;
        let dynaLeft1PerRound = dynaLeft1 / (approxTotRounds - roundNum);
        console.log(dynaLeft1PerRound);
        if (dynaLeft1PerRound > dynaPerRound) {
            return true
        } else {
            return false
        }
    }

    chooseDyna2(gamestate, dynaLeft2) {
        let roundNum = gamestate.rounds.length;
        let approxTotRounds = 2000;
        let dynaPerRound = 100 / 2000;
        let dynaLeft2PerRound = dynaLeft2 / (approxTotRounds - roundNum);
        console.log(dynaLeft2PerRound);
        if (dynaLeft2 < 3) {
            return true
        } else {
            return false
        }
    }

}

module.exports = new Bot();

var gamestateTest = {
    rounds: [{
            p1: "R",
            p2: "D"
        },
        {
            p1: "W",
            p2: "P"
        },
    ]
}

myDynabot = new Bot();
myDynabot.makeMove(gamestateTest);

//console.log(myDynabot.chooseDyna(gamestateTest, 3, 1));