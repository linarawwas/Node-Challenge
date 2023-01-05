
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
const arr= text.replace(/\s+/g, ' ').trim().split(" ");
if (arr.length==1){
  if (text === 'quit\n') {
    quit();
  }
  else if(text === 'exit\n'){
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text === 'help\n'){
help();
 }
  else{
    unknownCommand(text);
  }
}
else if(arr[0]=="hello"){
  console.log(arr[0]+" "+arr[1]+"!");
}
else{
  unknownCommand(text);
}
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}

/* lists all possible commands */
function help(){
  console.log('these are the commands: exit/quit, hello, help')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Lina Rawas")
