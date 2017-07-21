import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(board) {
      if(confirm('Confirm you want to delete?')){
       this.sendAction('deleteRecord', board);
    }
  },
    destroyAnswer(answer){
      this.sendAction('destroyAnswer',answer)
    },
  }
});
