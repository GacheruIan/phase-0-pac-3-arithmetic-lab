var a, b
beforeEach(function() {
    a = Math.floor(Math.random() * 1000)
    b = Math.floor(Math.random() * 1000)
  })
 

    function add(a, b){
            console.log(a+b)
    }
    add(10, 20)

    function subtract(a, b){
        console.log(a-b)
    }
    add(20, 20)

    function multiply(a, b){
        console.log(a*b)
    }
    add(20, 20)

    function divide(a, b){
        console.log(a/b)
    }
    add(20, 20)

    function add(a, b){
        return(a+b)
    }
    add(20, 20)

    function subtract(a, b){
        return(a-b)
    }
    subtract(20, 20)

    function multiply(a, b){
        return(a*b)
    }
    add(20, 20)

    function divide(a, b){
        return(a/b)
    }
    add(20, 20)
       function increment(n){
        return(++n)
       }
       increment(10)

       function decrement(n){
        return(--n)
       }
       decrement(10)

function makeInt(n){
return(parseInt(n, 10))
}
makeInt(2)

function preserveDecimal(n){
   return(parseFloat(n, 10))
}
preserveDecimal(3.14159265359)