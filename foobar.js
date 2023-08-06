// print number 1 - 50
// if divided by 3 then show foo
// if divided by 5 then show bar
// if divided by 3 & 5 then show foobar


for(let x = 1; x <= 50; x++){
    if( (x % 3) === 0 && (x % 5) === 0 ){
        console.log('foobar');
    }else if( (x % 3) === 0 ){
        console.log('foo');
    }else if( (x % 5) === 0 ){
        console.log('bar');
    }else{
        console.log(x);
    }
}




