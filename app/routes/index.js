import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('board'),
      answers: this.store.findAll('answer')
    });
  },
  actions:{
    saveQuery2(params){
      var nwQuestion=this.store.createRecord('board',params);
      nwQuestion.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
  var newResponse = this.store.createRecord('answer', params);
  newResponse.save();
  this.transitionTo('index');
}
  }
});
