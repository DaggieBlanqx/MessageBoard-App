import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('board');
  },
  actions:{
    deleteRecord(board){
      board.destroyRecord();
      this.transitionTo('index');
    },
    saveQuery2(params){
      var nwQuestion=this.store.createRecord('board',params);
      nwQuestion.save();
      this.transitionTo('index');
    }
  }
});
