import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuery:false,
  actions :{
    giveQuery(){
      this.set('addNewQuery',true)
    }
    saveQuery(params){

    }
  }
});
