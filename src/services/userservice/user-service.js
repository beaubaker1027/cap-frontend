import EventEmitter from 'eventemitter3';

var emitter = new EventEmitter();

const user = {

  userName:null,

  on : (trigger, callback) => {emitter.on(trigger, callback.bind(null))},

  off : (trigger, callback) => {emitter.removeListener(trigger, callback.bind(null))}

}
user.changeUser = async(userName) => {
  user.user = userName
  emitter.emit('userUpdated', userName);
};

export default user;
