import Ember from 'ember';

export function questionPopularity(params) {
  var board = params[0];

  if(board.get('answers').get('length') > 1){
    return Ember.String.htmlSafe('<p>People want to know about this topic</p>');
  }
  else if(board.get('answers').get('length') > 5){
    return Ember.String.htmlSafe('<p>People really want to know about this topic</p>');
  }
  else{
    return Ember.String.htmlSafe('<p>People really dont care about this topic</p>');
  }
}

export default Ember.Helper.helper(questionPopularity);
