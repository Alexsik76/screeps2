var defendRoom = require('defend');
function definition(){

   // Memory.targetInvasion = 'E12N47';
    Memory.roomName = 'E27N6';
  Memory.energyAv = Game.rooms[Memory.roomName].energyAvailable;
  if(!Memory.structuresAll){
    Memory.structuresAll = Game.rooms[Memory.roomName].find(FIND_STRUCTURES).length;
  }
  if(Memory.structuresAll != Game.rooms[Memory.roomName].find(FIND_STRUCTURES).length){
    Memory.structuresAll = Game.rooms[Memory.roomName].find(FIND_STRUCTURES).length
    let containers = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                              filter: (structure) => {
                              return (structure.structureType == STRUCTURE_CONTAINER)
                              }
                            });
    Memory.containersId = containers.map(function(name) {
        return name.id
    });
    let links = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                              filter: (structure) => {
                              return (structure.structureType == STRUCTURE_LINK)
                              }
                            });
    Memory.linksId = links.map(function(name) {
        return name.id
    });

    Memory.towers = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                              filter: (structure) => {
                              return (structure.structureType == STRUCTURE_TOWER)
                              }
                        });
    Memory.storage = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                              filter: (structure) => {
                              return (structure.structureType == STRUCTURE_STORAGE)
                              }
                         });
  }

  let cont0 = Game.getObjectById(Memory.containersId[0]);
  let cont1 = Game.getObjectById(Memory.containersId[1]);
   if( cont0 != null || cont1 != null) { 
Memory.containerId = cont0.store[RESOURCE_ENERGY] < cont1.store[RESOURCE_ENERGY] ? cont1.id : cont0.id;
   }
      if(Memory.containersId.length == 0){
    Memory.harvesting = true;
  } else{
      Memory.harvesting = false;
      if(Game.getObjectById(Memory.containerId).store[RESOURCE_ENERGY] < 200){
        Memory.harvesting = true;
      } else {
          Memory.harvesting = false;
      }
    }
   console.log('Storage =' + Game.rooms[Memory.roomName].storage);
   //typeof(some_variable) != 'undefined' && some_variable != null
   if(typeof(Game.rooms[Memory.roomName].storage) != 'undefined'){
      if(typeof(Game.rooms[Memory.roomName].storage) != 'undefined'  && Game.rooms[Memory.roomName].storage.store[RESOURCE_ENERGY] > 400000
      && !defendRoom(Memory.roomName) && Memory.energyAv > 600){
      Memory.readyToInvasion1 = true;
      } 
      if(Game.rooms[Memory.roomName].storage.store[RESOURCE_ENERGY] < 100000 ||
      defendRoom(Memory.roomName)) {
      Memory.readyToInvasion1 = false;
      }
   }

if(Memory.wallHit == undefined){
  Memory.wallHit = 1000;
}
let allWall = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
    filter: (structure) => (structure.structureType == STRUCTURE_WALL ||
            structure.structureType == STRUCTURE_RAMPART) &&
            structure.hits < Memory.wallHit});
if(allWall == '' && Memory.wallHit < 299999000){
  Memory.wallHit += 1000;
}
for(let n in allWall){
  if(allWall[n].hits < (Memory.wallHit - 1000)){
    Memory.wallHit -= 1000;
  }
}

};
module.exports = definition;
