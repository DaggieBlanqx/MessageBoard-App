import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion :Ember.inject.service(),
  showLink:false,
  actions: {
    showBoard(){
    this.set('showLink',true);
  },
    hide(){
      this.set('showLink',false);
    },
    addQuestion(question){
    this.get('favoriteQuestion').add(question);  
    }
  }

});
