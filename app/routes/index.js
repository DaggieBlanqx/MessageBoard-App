import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('board');
  },
  actions:{
    deleteRecord(board){
      board.destroyRecord();
      this.transitionTo('index');
    }
  }
});
