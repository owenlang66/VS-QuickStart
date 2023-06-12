


function selfReward(time){
    if (time < 10){
        console.log("It's latte time!");
    }
    else if (10 <= time < 16){
        console.log("Hot choccy time!");
    }
    else if (16 <= time < 22){
        console.log("Ice cream time!");
    }
    else if (time >= 22){
        console.log("Sleepytime")
    }
}

selfReward(17)
