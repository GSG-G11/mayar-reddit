const { dbBuild } = require('../server/database/config/build');
const connections = require('../server/database/config/connections');

const { postPostsQuery , getUserNameQuery} = require('../server/database/queries');

beforeEach(() => dbBuild());

describe('TESTS FOR DATABASE',()=>{
    test('test for get username by getUserNameQuery',()=>{
        const user_id = 2 ;
        getUserNameQuery(user_id)
        .then((data)=>{
            expect(data.rowCount).toBe(0);
        })
    });

    test('test for add any post in postPostQuery',()=>{
        const data = {
            votes : 2 , 
            content : 'hello',
            user_id : 1 ,
        };
        postPostsQuery(data)
        .then((data)=>{
            expect(data.rowCount).toBe(0);
        })
    });

    

    
})

afterAll(()=> connections.end());