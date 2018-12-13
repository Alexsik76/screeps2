var defendRoom = require('defend');
function definition(){

  if(!Memory.roomName){
    for(let i in Game.rooms){
    Memory.roomName = Game.rooms[i].name;
    }
  }

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
Memory.containerId = cont0.store[RESOURCE_ENERGY] < cont1.store[RESOURCE_ENERGY] ? cont1.id : cont0.id;
// console.log('Mem0  =' + cont0.store[RESOURCE_ENERGY]);
 //console.log('Mem1  =' + cont1.store[RESOURCE_ENERGY]);
// console.log('MemS  =' + Game.getObjectById(Memory.containerId).store[RESOURCE_ENERGY]);
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
    if(Game.rooms[Memory.roomName].storage.store[RESOURCE_ENERGY] > 300000
      && !defendRoom(Memory.roomName) && Memory.energyAv > 600){
      Memory.readyToInvasion1 = true;
    } else {
      Memory.readyToInvasion1 = false;
    }

console.log('Memory.readyToInvasion1 = ' + Memory.readyToInvasion1);
//console.log('MEM2  ' + Game.getObjectById(Memory.containers[0].id));
};
module.exports = definition;
