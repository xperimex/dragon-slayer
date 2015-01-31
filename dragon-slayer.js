var slaying = true;
var damage = Math.floor(Math.random()*5 + 1);
var lvl = Math.floor(Math.random()*6);
var dragonHealth = 5*lvl;
var ifHit = Math.floor(Math.random()*2);
var totalDamage = 0;

function i(){
     
    while(slaying){
     
        if(ifHit){
            
            console.log("You hit the dragon and did " + damage + " damage!");
        
            totalDamage = totalDamage + damage;
            
            if(totalDamage >= dragonHealth){
                
                console.log("You slayed the dragon! :).");
                slaying = false;
                
            } else{
                
                ifHit = Math.floor(Math.random()*3 + 1);
                damage = Math.floor(Math.random()*5 + 1);
                
            }
            
        } else {
            
            console.log("The dragon burninates you!");
            
            slaying = false;
        }
        
        
        console.log(lvl);
        
        
    }
}

i();