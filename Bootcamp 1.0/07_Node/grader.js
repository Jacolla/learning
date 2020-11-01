

function average(score){
    
    let total= 0;
    
    score.forEach(function(score){
        
        total += score;
        
    });
    
    let avg= total/score.length
    
    return Math.round(avg)
    
}


let score =[90,98,89,100,100,86, 94];
average(score); //Should return 94
console.log(average(score));

let score2=[40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(score2); //Shoould return 68
console.log(average(score2));

