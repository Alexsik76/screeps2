var number = 0;
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgrader2 = require('role.upgrader2');
var roleBuilder = require('role.builder');
var roleMiner0 = require('role.miner0');
var roleMiner1 = require('role.miner1');
var roleMinerUtrium = require('role.minerUtrium');
var roleDoctor = require('role.doctor');
var roleRanger = require('role.ranger');
var roleRepairer = require('role.repairer');
var ToSpawnRangers = require('tospawnrangers');
var defendRoom = require('defend');
var roleAttacker1 = require('role.attacker1');
var roleRAttacker1 = require('role.rattacker1');
var definition = require('definition');
var roleHarvester2 = require('role.harvester2');
var roleHarvester3 = require('role.harvester3');
var roleInvader = require('role.invader');
var letBuild = require('building');
var letTrade = require('let.trade');

module.exports.loop = function () {
definition();
letTrade(Memory.roomName);
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
var readyToInvasion = 0;
var miners = _.filter(Game.creeps, (creep) => (creep.memory.role == 'miner0' || creep.memory.role == 'miner1'));
console.log('Miners: ' + miners.length);

if(miners.length < Memory.containers.length && Memory.energyAv > 549) {
    number = Math.abs(number-1);
    let newName = 'Miner' + number;
    console.log('Spawning new miner: ' + newName);
    Game.spawns.Spawn1.spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], newName,
        {memory: {role: 'miner' + number}});
}

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);


    if(harvesters.length < 2) {
      readyToInvasion += 1;
        if(Memory.energyAv > 500 && Memory.harvesting == false)
        {
        let newName = 'HarvesterBig' + Game.time;
        console.log('Spawning new harvesterBig' + newName);

        Game.spawns.Spawn1.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'harvester'}});
        } else {
        let newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
	    }
console.log('Not energy for spawn harvester');
}
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
    console.log('Harvesters2: ' + harvesters2.length);
        if(harvesters2.length < 2 && Memory.energyAv > 749) {
          readyToInvasion += 1;
          let newName = 'HarvesterWar' + Game.time;
          console.log('Spawning new harvesterWar: ' + newName);
          Game.spawns.Spawn1.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,
                                      MOVE,MOVE,MOVE,MOVE,MOVE], newName,
                                      {memory: {role: 'harvester2'}})
        }
        var harvesters3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester3');
        console.log('Harvesters3: ' + harvesters3.length);
            if(harvesters3.length < 1 && Memory.energyAv > 199) {
              readyToInvasion += 1;
              let newName = 'HarvesterUtrium' + Game.time;
              console.log('Spawning new harvesterUtrium: ' + newName);
              Game.spawns.Spawn1.spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
                                          {memory: {role: 'harvester3'}})
            }
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 3 && Memory.energyAv > 499) {
      readyToInvasion += 1;
        let newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader'}});
    }
    var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2');
    console.log('Upgraders2: ' + upgraders2.length);

    if(upgraders2.length < 0 && Memory.energyAv > 249) {
      readyToInvasion += 1;
        let newName = 'UpgraderInvasion' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader2'}});
    }

    var doctors = _.filter(Game.creeps, (creep) => creep.memory.role == 'doctor');
    console.log('Doctors: ' + doctors.length);
    if(doctors.length < 0 && Memory.energyAv > 299) {
      readyToInvasion += 1;
        let newName = 'Doctor' + Game.time;
        console.log('Spawning new Doctor: ' + newName);
        Game.spawns.Spawn1.spawnCreep([HEAL,MOVE], newName,
            {memory: {role: 'doctor'}});
    }
    var minersUtrium = _.filter(Game.creeps, (creep) => creep.memory.role == 'minerUtrium');
    console.log(' MinersUtrium ' +  minersUtrium.length);
    if( minersUtrium.length < 1 && Memory.energyAv > 299) {
      readyToInvasion += 1;
        let newName = 'MinerUtrium' + Game.time;
        console.log('Spawning new  MinerUtrium: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,WORK,MOVE,MOVE], newName,
            {memory: {role: 'minerUtrium'}});
    }
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);
    if(repairers.length < 3 && Memory.energyAv > 249) {
      readyToInvasion += 1;
        let newName = 'Repairer' + Game.time;
        console.log('Spawning new Repairer: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'repairer'}});
    }

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var targets = Game.rooms[Memory.roomName].find(FIND_CONSTRUCTION_SITES).length;
    console.log('Builder: ' + builders.length);
    if(builders.length < 1 && targets > 0){
      readyToInvasion += 1;
      if(Memory.energyAv > 999) {
        let newName = 'BuilderBig' + Game.time;
        console.log('Spawning new builder big: ' + newName);
        Game.spawns.Spawn1.spawnCreep([WORK,WORK,WORK,WORK,CARRY,
                                          CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,
                                          MOVE,MOVE,MOVE,MOVE,MOVE], newName,
           {memory: {role: 'builder'}});
      } else {
        if(Memory.energyAv > 299){
          let newName = 'Builder' + Game.time;
          console.log('Spawning new builder: ' + newName);
          Game.spawns.Spawn1.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName,
             {memory: {role: 'builder'}});
        }
      }
    }

    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker1');
    console.log('Attackers: ' + attackers.length);
 console.log('Ready To Invasion 2 = ' + readyToInvasion);
    if(readyToInvasion < 1  && Memory.readyToInvasion1){
      if(attackers.length < 0){
        let newName = 'Attacker' + Game.time;
        console.log('Spawning new attacker: ' + newName);
        Game.spawns.Spawn1.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,
          MOVE,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
          ATTACK,RANGED_ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK], newName,{memory: {role: 'attacker1'}});
      }
    }

    var rattackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'rattacker1');
    console.log('RAttackers: ' + rattackers.length);
      if(readyToInvasion < 1  && Memory.readyToInvasion1){

      if(rattackers.length < 1){
        let newName = 'RangeAttacker' + Game.time;
        console.log('Spawning new rangeattacker: ' + newName);
        Game.spawns.Spawn1.spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
          ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,
          RANGED_ATTACK,], newName,{memory: {role: 'rattacker1'}});
      }
    }

    if((attackers.length > 2) && (rattackers.length > 4) && !defendRoom(Memory.roomName)){
    Memory.invasion = true;
    }
    if ((attackers.length < 1) || (rattackers.length < 1)){
    Memory.invasion = true;
    }
    //Memory.invasion = true;

  var invaders = _.filter(Game.creeps, (creep) => creep.memory.role == 'invader');
  console.log('Invaders: ' + invaders.length);
  if(readyToInvasion < 1  ){
    if(invaders.length < 0){
      let newName = 'Invader' + Game.time;
      console.log('Spawning new invader: ' + newName);
  Game.spawns.Spawn1.spawnCreep([WORK,CLAIM,MOVE,MOVE,
    MOVE,MOVE,ATTACK,RANGED_ATTACK], newName,{memory: {role: 'invader'}});
    }
  }
    if(Game.spawns.Spawn1.spawning) {
        var spawningCreep = Game.creeps[Game.spawns.Spawn1.spawning.name];
        Game.spawns.Spawn1.room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns.Spawn1.pos.x + 1,
            Game.spawns.Spawn1.pos.y,
            {align: 'left', opacity: 0.8});
    }
    var closestDamagedStructure = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL
    });


     for(let name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
        }
        if(creep.memory.role == 'harvester3') {
            roleHarvester3.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'upgrader2') {
            roleUpgrader2.run(creep);
        }
        if(creep.memory.role == 'miner0') {
            roleMiner0.run(creep);
        }
         if(creep.memory.role == 'miner1') {
            roleMiner1.run(creep);
        }
        if(creep.memory.role == 'minerUtrium') {
           roleMinerUtrium.run(creep);
       }
        if(creep.memory.role == 'repairer') {

              roleRepairer.run(creep);

            }
        if(creep.memory.role == 'doctor') {
               roleDoctor.run(creep);
           }
        if(creep.memory.role == 'ranger') {
            roleRanger.run(creep);
        }
        if(creep.memory.role == 'invader') {
            roleInvader.run(creep);
        }

        if(creep.memory.role == 'attacker1') {
          if(!defendRoom(Memory.roomName)){
            roleAttacker1.run(creep);
          } else {
            roleRanger.run(creep);
          }
        }
        if(creep.memory.role == 'rattacker1') {
          if(!defendRoom(Memory.roomName)){
            roleRAttacker1.run(creep);
          } else {
            roleRanger.run(creep);
          }
        }
        if(creep.memory.role == 'builder') {
          if(targets == 0){
            roleRepairer.run(creep);
          }else {
            roleBuilder.run(creep);
          }
        }
    }
//console.log('closestDamagedStructure == ' + targets);
    var rangers = _.filter(Game.creeps, (creep) => creep.memory.role == 'ranger');
    console.log('Rangers: ' + rangers.length);

    if(Memory.towers){
      var towers = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                return (structure.structureType == STRUCTURE_TOWER)
                                }
                          });
      if(defendRoom(Memory.roomName) == undefined ) {
        let targetStructure = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL &&
            structure.structureType != STRUCTURE_RAMPART
        });
      if(targetStructure) {
          towers.forEach(tower => tower.repair(targetStructure[0]));
        }
      }
    }
console.log('Energy Avalible = ' + Memory.energyAv);
console.log('Storage energy = ' + Game.rooms[Memory.roomName].storage.store[RESOURCE_ENERGY]);
//console.log(JSON.stringify(Game.creeps));
//console.table(Game.creeps);
defendRoom(Memory.roomName);
//letBuild(Memory.roomName);


};
