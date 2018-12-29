/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('tospawnrangers');
 * mod.thing == 'a thing'; // true
 */

function toSpawnRangers(amount){

        var rangers = _.filter(Game.creeps, (creep) => (creep.memory.role == 'ranger'));
        if(rangers.length < amount) {
        var newName = 'Ranger' + Game.time;
        console.log('Spawning new ranger: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,
          MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,
          MOVE,MOVE,MOVE,ATTACK,ATTACK], newName,
        {memory: {role: 'ranger'}})
        }
}
module.exports = toSpawnRangers;
