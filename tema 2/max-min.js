const a = 5
const b = 8
const c = 10

// Max

let max;

if (a >= b && a >= c ){
  max = a;
} else if 
    (b >= a && b >= c) { max = b}
    else if ( c >= a && c >=b ) { max = c}


console.log("Maximul este:" , max)


//Min

let min;

if ( a <= b && a <= c){
    min = a;
} else if( b <=a && b <= c) {
    min = b;
} else if ( c <=a && c <= b) {
    min = a;
}

console.log( "Minimul este:", min)