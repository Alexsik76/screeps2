/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.miner1');
 * mod.thing == 'a thing'; // true
 */
   var roleMinerUtrium = {
run: function(creep) {
                creep.moveTo(36,4, {visualizePathStyle: {stroke: '#ffaa00'}});
                var sources = creep.room.find(FIND_MINERALS);
                console.log('Utrium =' + sources.mineralType);
                if(Game.getObjectById('5c1fd01db4a2ff073249d0fd').cooldown < 1){
                  creep.harvest(sources[0])

                }


}
};
module.exports = roleMinerUtrium;
