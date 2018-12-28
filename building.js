function letBuild(roomName) {
  if(Game.getObjectById(Memory.controller).level > 4 ){
    if(!Memory.linksId || (Memory.containersId.length > 0 &&
      Memory.linksId.length <  Memory.containersId.length)){
      for(let i in Memory.containersId.length){
        posCont0 = Game.getObjectById(Memory.containersId[i]).pos;
        let found = Game.rooms[Memory.roomName].lookForAtArea(LOOK_STRUCTURES,10,5,11,7);
      }
    }
  }










}
module.exports = letBuild;
