export class User {};
User.schema ={
  name : 'User',
  properties : {
    id : {type: 'string'},
    name : {type: 'string', optional: true},
    picture : {type: 'data', optional: true},
  }
}
export class Idea {};
Idea.schema ={
  name : 'Idea',
  preoperties : {
    title : {type: 'string'},
    description : {type: 'string'},
    picture : {type: 'data', optional: true},
    cratedAt : {type:'date'},
    updatedAt : {type:'date'},
    owner : {type:'User'}
  }
};
export class Poll {};
Poll.schema = {
  name : 'Poll',
  properties : {
    title : {type: 'string'},
    selectNum : {type:'int'}
  }
};
export class Hackathon {};
Hackathon.schema = {
  name : "Hackathon",
  properties : {
    title : {type: 'string'},
    description : {type: 'string'},
    picture : {type: 'data', optional: true},
    // ideas : {type:'list',objectType:'Idea', optional: true},
    // polls : {type:'list',objectType:'Poll', optional: true},
    joinType : {type: 'string'},
    joinmail : {type: 'string'},
    cratedAt : {type:'date'},
    updatedAt : {type:'date'},
    // owner : {type:'string', optional: true},
  }
};
