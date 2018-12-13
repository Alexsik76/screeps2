function renew(creep){
  if(Memory.energyAv > 600){


  if(creep.ticksToLive<300){
    creep.memory.renew = true;
  }
  if(creep.memory.renew){
    if(Game.spawns['Spawn1'].renewCreep(creep) == ERR_NOT_IN_RANGE){
      creep.moveTo(Game.spawns['Spawn1']);
    }
  }
  if(creep.ticksToLive > 1300){
    creep.memory.renew = false;
  }
}
}
module.exports = renew;
