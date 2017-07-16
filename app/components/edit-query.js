import Ember from 'ember';

export default Ember.Component.extend({
   editForm: false,

     actions :{
       updateQuestion(){
         this.set('editForm',true)
       },
       edit(board){
         var params={
         author: this.get('author'),
         question: this.get('question'),
         description: this.get('description')
         };
         this.set('editForm',false);
         this.sendAction('editTile',params,board);
       }
   }
});
