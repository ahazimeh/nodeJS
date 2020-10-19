
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
var list = [];
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.startsWith("hello ") || text.startsWith("hello\t")){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text.startsWith("list")){
    tasks(list);
  }
  else if(text.startsWith("add ")){
    add(text);
  }
  else if(text === 'remove\n' ||text.startsWith("remove ")){
    remove(text);
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
function hello(c){
  // console.log('hello!')
  console.log(c.trim()+"!!")
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
/**
 * list of the commands
 *
 * @returns {void}
 */
function help(){
  console.log('Type quit or exit to terminate\nType hello to print hello!')
}

function tasks(list){
  for(var i = 0;i<list.length;i++){
    console.log(list[i]);
  }
}
function add(c){
  c = c.trim();
  list.push(c.substring(4).trim());
}
function remove(c){
  c = c.trim();
  if(c.length == 6){
    list.pop();
  }
  else{
  list.splice(c.substring(7),1);
}
}


// The following line starts the application
startApp("Ali Hazimeh")
