
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
  arr= text.replace(/\s+/g, ' ').trim().split(" ");
if (arr.length==1){
  if (text === 'quit\n') {
    quit();
  }
  else if(text === 'exit\n'){
    quit();
  }
  else if(text === 'remove\n'){
    remove();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text === 'list\n'){
    list();
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
else if(arr[0]=='add'){
  add();
}
else if(arr[0]=='remove'){
  remove();
}
else if(arr[0]=='edit'){
edit();
}
else if(arr[0]=='check'){
  checkUncheck('check');
  }
else if(arr[0]=='uncheck'){
  checkUncheck('uncheck');
 }
else{
  unknownCommand(text);
}
}
/* this is the initial task list */
const tasks =['read a book','hug your mama and baba','get nephews and nieces chocolate'];
var listItem=[];
for (let i=0; i<tasks.length ; i++){
    listItem+=" [ ] "+(i+1).toString()+". "+tasks[i];
}

function checkUncheck(checkUncheck){
 for(let i=0;i<listItem.length;i++){
  if(arr[1]==i){
    if(checkUncheck=='check'){
      listItem[i-1].replace("[ ]","[✓]");
      console.log(listItem)

    }else{
      listItem[i-1].replace("[✓]","[ ]");
      console.log(listItem)
    }
  }
 } 
  }

function list(){
    console.log(listItem);
  }

function add(){ 
newTaskArray=[];
  for (let i=1; i<arr.length ; i++){
newTaskArray+=arr[i]+" "  ;
}
/* this is the array we will save added tasks to */
var newTasks=[]
newTasks= tasks.concat(newTaskArray)
console.log(newTasks)
}

function remove(){
  if (arr[1]=='1'){
  newTasks.shift();
  console.log('first element was removed',newTasks);
  }else if (arr[1]==2){
  newTasks.splice(1,1)
  console.log('2nd element was removed', newTasks)
  }else if (arr[1] > newTasks.length){
    console.log('wrong number, nothing to remove')
  }else{
    newTasks.pop()
    console.log('last element was removed', newTasks)
  }
}
function edit(){
  var numbers=[1,2,3,4,5]
  for(let i=0;i<5;i++){
    if(arr[1]==numbers[i]){
      var toAdd=arr.slice(2,arr.length).join(" ")
      var edited=newTasks.splice(i-1,1,toAdd)
      console.log(edited)
    }
else{
  var toAdd=arr.slice(1,arr.length).join(" ")
  var edited= newTasks.splice(i-1,1,toAdd)
  console.log(edited)
}
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
  console.log('these are the commands: exit/quit, hello, hello someone, remove, remove 1, remove 2, help')
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
