/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('defend');
 * mod.thing == 'a thing'; // true
 */
 // 1234567822222222
var toSpawnRangers = require('tospawnrangers');
function defendRoom(roomName) {
    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    if(Memory.towers){
      var towers = Game.rooms[Memory.roomName].find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                return (structure.structureType == STRUCTURE_TOWER)
                                }
                          });
    if(hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        towers.forEach(tower => tower.attack(hostiles[0]));
        toSpawnRangers((hostiles.length + 2));
        return hostiles;
    }
  }
}
module.exports = defendRoom;
