
/**
 * query sequencer factory
 * @param  {string} node class name selector
 * @return {function} api available public chainable methods 
 */
function qs(node) {
  if(Object.keys(this).length != 0) {
    return new qs(node)  
  } else {
    this.node = this.methods.select(node);
    return this.api()
  }
}
var _ = qs.prototype;
/**
 * controller methods
 * @return {Object} this
 */
_.api = function () {
  return {
    on: function (action, sequence, delay) {
      this.delay = (!delay) ? 0 : delay
      window.addEventListener(action, function (e){
        this.applyTransition(sequence, e)
      }.bind(this))
      return this
    }.bind(this)
  }
}
/**
 * helper methods
 * @type {Object}
 */
_.methods = {
  select: function (query) {
    return document.querySelector(query)
  },
  addTransition: function(){
    this.node.classList.add('transition--step-' + this.count);
  }
}
/**
 * timeout sequencer
 * @return {null} [description]
 */
_.to = function () {
    setTimeout(function (){
      this.step();
    }.bind(this), this.sequence[this.count] * 1000)
}
/**
 * adds the current transition classname, and hadles the sequence logic
 * @return {null} [description]
 */
_.step = function(){
  this.methods.addTransition.call(this);
  if(this.count < this.sequence.length - 1) {
    this.count++;
    this.to();
  } 
}
/**
 * setup
 * @param  {array} sequence time inbetween each transition, which starts instantly, unless an initial delay has been specified
 * @return {null}          [description]
 */
_.applyTransition = function (sequence) {
  this.sequence = [this.delay].concat(sequence);
  this.count = 0;
  this.to();
}

qs('.thing').on('click', [.5,.5]);

