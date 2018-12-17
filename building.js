function letBuild(roomName) {
  if(Game.getObjectById(Memory.controller).level > 4 ){
    if((Memory.containersId.length > 0 &&
      Memory.linksId.length <  Memory.containersId.length) || !Memory.linksId){
      conslole.log('Conainers and Links = '
      + Memory.containersId.length + " " + Memory.linksId.length);
    }
  }










}
module.exports = letBuild;
