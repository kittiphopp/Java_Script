function createQuote(quote, callcack) {
    let myQuote = "Like I always say, " + quote
    callcack(myQuote); //2
}

function logQuote(quote) {
    console.log(quote + 'Yes..');
}

createQuote(" you will getting better!", logQuote); //1

