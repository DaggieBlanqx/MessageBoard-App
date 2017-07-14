import Ember from 'ember';

export default Ember.Component.extend({
  showLink:false,
  actions: {
    showBoard(){
    this.set('showLink',true);
  },
    hide(){
      this.set('showLink',false);
    },
    edit(board,params){
      this.sendAction('editTile',board,params)
    },
    delete(board){
      if(confirm('Confirm you want to delete?')){
       this.sendAction('deleteRecord', board);
    }
    }
  }

});
