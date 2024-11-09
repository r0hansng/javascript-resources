const accountId = 134423 //This is locked and can't be changed
let accountEmail = "rohan@google.com" //Use let and not var
var accountPassword = "12345" //var has some scope issue so we don't use var
accountCity = "Jaipur" //This should be avoided but a variable can be declared in this way
let accountState; //If we don't assign a value to the variable then the value stored is undefined

// accountId = 2 //not allowed

accountEmail = "rs@rs.com"
accountPassword = "22112211"
accountCity = "Bengaluru"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])