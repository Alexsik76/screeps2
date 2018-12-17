function letBuild(roomName) {
  if(Game.getObjectById(Memory.controller).level > 4 ){
    //console.log('Continers and Links = ' + !Memory.linksId);
    if(!Memory.linksId || (Memory.containersId.length > 0 &&
      Memory.linksId.length <  Memory.containersId.length)){
      console.log('Conainers and Links = '
      + Memory.containersId.length + " " + Memory.linksId.length);
    }
  }










}
module.exports = letBuild;
