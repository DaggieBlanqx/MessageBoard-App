import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('board');
  },
  actions:{
    saveQuery2(params){
      var nwQuestion=this.store.createRecord('board',params);
      nwQuestion.save();
      this.transitionTo('index');
    },
  }
});
