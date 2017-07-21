import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.board_id);
  },
  actions: {
    editTile(board, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          board.set(key, params[key]);
        }
      });
      board.save();
      this.transitionTo('index');
    },
    deleteRecord(board) {
      board.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newResponse = this.store.createRecord('answer', params);
      var board=params.board;
      board.get('answers').addObject(newResponse);
      newResponse.save().then(function(){
        return board.save();
      });
      this.transitionTo('question',board);
    }
  }
});
