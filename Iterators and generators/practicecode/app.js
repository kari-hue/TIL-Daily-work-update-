
/*
let milk = ['oatmilk','cocunut milk','rice milk','soy milk','almond milk'];

let p = milk[Symbol.iterator]();
console.log(p.next().done);
*/


//generators
/*
let milk = ['oatmilk','cocunut milk','rice milk','soy milk','almond milk'];

function* see(){

    yield milk[0];
    yield milk[1];
    yield milk[2];
    return
    yield milk[3];
}

let iter = see();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

*/
//by default objects doesn't have iterators

let bestsong =
{
title: "sorry",
singer : "halsey",
age : 25,
place :"miami"
}

let count = -1;
let bs = {
    [Symbol.iterator] : function() {
        return{
            next: ()=> {

                count++;
                switch(count) {
                    case 0:
                        return{
                            value : bestsong.title,
                            done:false
                        }
                    case 1: 
                    return{
                        value: bestsong.singer,
                        done:false
                    }

                    case 3:
                        return{
                            value:undefined,
                            done: true
                        }

                    default:
               return{
                   value:undefined,
                   done:true
               }        
            
            


                }
            }
        }
    }
}

let data = bs[Symbol.iterator]();
console.log(data.next());
console.log(data.next());


