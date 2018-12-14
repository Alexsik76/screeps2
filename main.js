//require('version');
var number = 0;
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgrader2 = require('role.upgrader2');
var roleBuilder = require('role.builder');
var roleMiner0 = require('role.miner0');
var roleMiner1 = require('role.miner1');
var roleDoctor = require('role.doctor');
var roleRanger = require('role.ranger');
var roleRepairer = require('role.repairer');
var ToSpawnRangers = require('tospawnrangers');
var defendRoom = require('defend');
var roleAttacker1 = require('role.attacker1');
var definition = require('definition');
var roleHarvester2 = require('role.harvester2');
var roleInvader = require('role.invader');

module.exports.loop = function () {
definition();

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
    var newName = 'Miner' + number;
    console.log('Spawning new miner: ' + newName);
    Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], newName,
        {memory: {role: 'miner' + number}});
}

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    var needHarvesters = Memory.container.store[RESOURCE_ENERGY] > 1500 ? 4 : 2;
    console.log('needHarvesters  ' + needHarvesters);
    if(harvesters.length < needHarvesters) {
      readyToInvasion += 1;
      console.log('Ready To Invasion ' + Memory.readyToInvasion);
        console.log(Game.spawns['Spawn1'].energy);
        if(Memory.energyAv > 450 && Memory.harvesting == false)
        {
        var newName = 'HarvesterBig' + Game.time;
        console.log('Spawning new harvester: ' + newName);

        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'harvester'}})
        } else {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
	    }
console.log('Not energy for spawn harvester');
}
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
    console.log('Harvesters2: ' + harvesters2.length);
        if(harvesters2.length < 2 && Memory.readyToInvasion1) {
          readyToInvasion += 1;
        var newName = 'HarvesterWar' + Game.time;
        console.log('Spawning new harvesterWar: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'harvester2'}})
        }
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2 && Memory.energyAv > 249) {
      readyToInvasion += 1;
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader'}});
    }
    var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2');
    console.log('Upgraders2: ' + upgraders2.length);

    if(upgraders2.length < 2 && Memory.energyAv > 249) {
      readyToInvasion += 1;
        var newName = 'Upgrader2' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'upgrader2'}});
    }

    var doctors = _.filter(Game.creeps, (creep) => creep.memory.role == 'doctor');
    console.log('Doctors: ' + doctors.length);
    if(doctors.length < 1 && Memory.energyAv > 299) {
      readyToInvasion += 1;
        var newName = 'Doctor' + Game.time;
        console.log('Spawning new Doctor: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([HEAL,MOVE], newName,
            {memory: {role: 'doctor'}});
    }
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);
    if(repairers.length < 2 && Memory.energyAv > 249) {
      readyToInvasion += 1;
        var newName = 'Repairer' + Game.time;
        console.log('Spawning new Repairer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'repairer'}});
    }

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var targets = Game.rooms[Memory.roomName].find(FIND_CONSTRUCTION_SITES).length;
    console.log('Builder: ' + builders.length);
    if(builders.length < 4 && targets > 0){
      readyToInvasion += 1;
      if(Memory.energyAv > 449) {
        var newName = 'BuilderBig' + Game.time;
        console.log('Spawning new builder big: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
           {memory: {role: 'builder'}});
      } else {
        if(Memory.energyAv > 299){
          var newName = 'Builder' + Game.time;
          console.log('Spawning new builder: ' + newName);
          Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName,
             {memory: {role: 'builder'}});
        }
      }
    }

    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker1');
    console.log('Attackers: ' + attackers.length);
console.log('Ready To Invasion 2 = ' + readyToInvasion);
    if(readyToInvasion < 1  && Memory.readyToInvasion1){
      if(attackers.length < 5){
        var newName = 'Attacker' + Game.time;
        console.log('Spawning new attacker: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,
          MOVE,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
          ATTACK,RANGED_ATTACK], newName,{memory: {role: 'attacker1'}});
      }
    }
    if(attackers.length > 4 && !defendRoom(Memory.roomName)){
    Memory.invasion = true;
  } else {
    Memory.invasion = false;
  }
//   Memory.invasion = true;
  var invaders = _.filter(Game.creeps, (creep) => creep.memory.role == 'invader');
  console.log('Invaders: ' + invaders.length);
  if(readyToInvasion < 4  && Memory.readyToInvasion1){
    if(invaders.length < 0){
      var newName = 'Invader' + Game.time;
      console.log('Spawning new invader: ' + newName);
  Game.spawns['Spawn1'].spawnCreep([WORK,CLAIM,MOVE,MOVE,
    MOVE,MOVE,ATTACK,RANGED_ATTACK], newName,{memory: {role: 'invader'}});
    }
  }
    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }
    var closestDamagedStructure = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL
    });


     for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'upgrader2') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'miner0') {
            roleMiner0.run(creep);
        }
         if(creep.memory.role == 'miner1') {
            roleMiner1.run(creep);
        }
        if(creep.memory.role == 'repairer') {

              roleRepairer.run(creep);

            }
        if(creep.memory.role == 'doctor') {
               roleDoctor.run(creep);
           }
        if(creep.memory.role == 'ranger') {
            roleAttacker1.run(creep);
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
        if(creep.memory.role == 'builder') {

            roleHarvester2.run(creep);
        }



    }

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
defendRoom(Memory.roomName);




//if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
//    Memory.SCRIPT_VERSION = SCRIPT_VERSION
//    console.log('New code uplodated')
//}


};
