import Ember from 'ember';

export default Ember.Component.extend({
  showLink:false,
  actions: {
    showBoard(){
    this.set('showLink',true);
  },
    hide(){
      this.set('showLink',false);
    }
  }

});
