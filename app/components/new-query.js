import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuery:false,
  actions :{
    giveQuery(){
      this.set('addNewQuery',true)
    },
    saveQuery(){
      var params={
      author: this.get('author'),
      question: this.get('question'),
      description: this.get('description')
      };
      this.set('addNewQuery',false);
      this.sendAction('saveQuery1',params)
    }
  }
});
