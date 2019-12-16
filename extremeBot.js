class Bot {

    makeMove(gamestate) {
        let roundNum = gamestate.rounds.length;
        let dynaLeft1 = this.countDyna(gamestate)[0];
        let dynaLeft2 = this.countDyna(gamestate)[1];
        let sufficentDyna1 = this.chooseDyna1(gamestate, dynaLeft1);
        let toomuchDyna2 = this.chooseWater(gamestate, dynaLeft1, dynaLeft2)
        let behaves2 = this.testing2Behaviour(gamestate)
        console.log("--------");
        console.log(dynaLeft1);
        console.log(dynaLeft2);
        let randomNum1 = Math.floor(Math.random() * 3);
        let randomNum2 = Math.floor(Math.random() * 3);


        if (dynaLeft1 > 1) {
            return "D";
        } else if (toomuchDyna2 == true && behaves2 == true) { // if dynaLeft1perround << dynaperround and dynaleft2perround > 10
            return "W";
        } else if (randomNum1 == 0) {
            return "R";
        } else if (randomNum1 == 1) {
            return "P";
        } else {
            return "S";
        }

    }

    testing2Behaviour(gamestate) {
        let roundNum = gamestate.rounds.length;
        //let test = gamestate.rounds[roundNum-1].p1;
        if (roundNum > 100 && roundNum < 107) {
            return true
        } else if (roundNum > 106 && gamestate.rounds[roundNum - 1].p1 == "W" && gamestate.rounds[roundNum - 2].p1 == "W" && gamestate.rounds[roundNum - 3].p1 == "W" && gamestate.rounds[roundNum - 4].p1 == "W") {
            let wins = 0;
            for (let i = 1; i <= 4; i++) {
                if (gamestate.rounds[roundNum - i].p2 == "D") {
                    wins += 1;
                }
            }
            if (wins >= 2) {
                return true
            } else {
                return false
            }
        } else {
            return false
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

    chooseWater(gamestate, dynaLeft1, dynaLeft2) { // if dynaLeft1perround << dynaperround and dynaleft2 > 10
        let roundNum = gamestate.rounds.length;
        let approxTotRounds = 2000;
        let dynaPerRound = 100 / 2000;
        let dynaLeft1PerRound = dynaLeft1 / (approxTotRounds - roundNum);
        let dynaLeft2PerRound = dynaLeft2 / (approxTotRounds - roundNum);
        console.log(dynaLeft2PerRound);
        if (dynaLeft1PerRound * 5 < dynaPerRound && dynaLeft2 > 10) {
            return true
        } else {
            return false
        }
    }

}

module.exports = new Bot();

var gamestateTest = {
    rounds: [{
            p1: "W",
            p2: "D"
        },
        {
            p1: "W",
            p2: "D"
        },
        {
            p1: "W",
            p2: "D"
        },
        {
            p1: "W",
            p2: "D"
        }
    ]
}

myDynabot = new Bot();
myDynabot.makeMove(gamestateTest);

console.log(myDynabot.testing2Behaviour(gamestateTest))

//console.log(myDynabot.chooseDyna(gamestateTest, 3, 1));