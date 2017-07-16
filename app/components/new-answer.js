import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
actions: {
  giveAnswer() {
    this.set('addNewAnswer', true);
  },
  saveAnswer() {
   var params = {
     author: this.get('author'),
     response: this.get('response'),
   };
   this.set('addNewAnswer', false);
   this.sendAction('saveAnswer', params);
 }
}
});
