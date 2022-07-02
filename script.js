var blob = [
  ["blabbering", "persnickety", "idiotic", "gormless", "suppurating", "pick-a-pock", "leaky", "twiddling", "useless", "frilly", "slack-a-jaw", "gape-a-gob", "irritating", "stammering", "seething", "dripsy", "odorous", "painfaced", "empty-headed", "breath-wasting", "eunuch", "limp", "soft", "dripping", "will-a-nilly", "suckling", "lip flapping", "boot sucking", "skirt lifting", "moist", "wet", "dreadful", "drippy", "lip sucking", "loose", "punch-faced", "sore-mouthed", "worthless", "absolute", "full-mouthed", "sloppy", "chattering", ""], 
  ["fumerous", "onerous", "ruminous", "pickerous", "slopful", "spoiledsome", "painsome", "lackerous", "lackawise", "dumbful", "noisesome", "bothery", "droolsome", "rashsome", "chatterly", "", "", "gobful", "flopsy", "complainsome", "whinesome", "tireful", "dripsome", "evilous", "raspful", "gruntsome", "wailful", "loosesome", "leaksome", "slimeful", ""], 
  ["bandersnatch", "strumpet", "lackawit", "lapdog", "layabout", "floozy", "tart", "blanket", "belt loosener", "strumpet", "empty-head", "bubblebrains", "slop bucket", "knuckle picker", "wobblehead", "sieve-head", "tart", "waistcoast", "drop-drawers", "blanket sucker", "loose-limbs", "nose tweaker", "idiot", "clown", "jackanape", "chatternap", "loose-gob", "busybody", "brick-picker", "chatter-head", "talkabout", "bubble-brains", "twiddler", "loose-neck", "bicycle", "harlot", "ooze", "fungus", "worm", "sausage merchant", "clam licker", "harlot", "skirt-groper", "skirt-lifter", "boot sucker", "flop-about", "loose-lips", "flap-a-lip", "trouser-thief", "slime", "skin-picker", "nipple tweaker", "know-nothing"]
];
function rollOneBase() {  
  let output = "";
  for (var i = 0; i < blob.length; i++) {
    var table = blob[i];
    output += " " + (table[Math.floor(Math.random() * table.length)]);
  };
  return output;
}
function rollOneNew() {  
  let outFirstAdjective = blob[0][Math.floor(Math.random() * blob[2].length)]
  let outSecondAdjective = blob[1][Math.floor(Math.random() * blob[2].length)]
  let outSubject = blob[2][Math.floor(Math.random() * blob[2].length)]
  if( Math.random() > .65){
    outFirstAdjective = "";
  }  
  if( Math.random() > .65){
    outSecondAdjective = "";
  }
  return [outFirstAdjective,outSecondAdjective,outSubject].join(" ").trim();
}
function save(){
  
}
window.onload = function(){
  let roll = document.getElementById("butt");
  let save = document.getElementById("save");
  let rollNew = document.getElementById("new");
  let rollBase = document.getElementById("base");
  let exclaim = document.getElementById("exclaim");
  let autosave = document.getElementById("autosave");
  let savedList = document.getElementById("saveList");
  let display = document.getElementById("display");
  roll.addEventListener("click", function(){
    if( rollBase.checked ){
      display.innerHTML = rollOneBase(); 
    } else {
      display.innerHTML = rollOneNew(); 
    }
    if( exclaim.checked ){
      display.innerHTML = display.innerHTML + "!";
    }
    display.innerHTML = display.innerHTML.charAt(0).toUpperCase() + display.innerHTML.slice(1);
    if( autosave.checked ){
      saveItem();
    }
  });
  
  save.addEventListener("click", saveItem);
  
  function saveItem() {
    let saved = document.createElement("div");
    let kill = document.createElement("span");
    saved.innerHTML = display.innerHTML;
    kill.classList.add("kill");
    kill.innerHTML = "X";
    kill.addEventListener("click", function(){
      saved.remove();
    })
    saved.appendChild(kill);
    savedList.appendChild(saved);
  }
}