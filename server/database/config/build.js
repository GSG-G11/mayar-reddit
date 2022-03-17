const {join } =  require('path');
const { readFileSync } = require('fs')
const connections = require('./connections');

const dbBuild = ()=>{
    const sql = readFileSync(join(__dirname , 'buildDB' , 'build.sql' )).toString();
    return connections.query(sql);
}
module.exports = { dbBuild } ;