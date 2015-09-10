

function qs(node) {
  if(Object.keys(this).length != 0) {
    return new qs(node)  
  } else {
    this.node = this.methods.select(node);
    return this.api()
  }
}
var _ = qs.prototype;

_.api = function () {
  return {
    on: function (action, sequence, delay) {
      this.delay = (!delay) ? 0 : delay
      window.addEventListener(action, function (e){
        this.applyTransition(sequence, e)
      }.bind(this))
    }.bind(this)
  }
}
_.methods = {
  select: function (query) {
    return document.querySelector(query)
  },
  addTransition: function(){
    this.node.classList.add('transition--step-' + this.count);
  }
}
_.to = function () {
    setTimeout(function (){
      this.step();
    }.bind(this), this.sequence[this.count] * 1000)
}
_.step = function(){
  this.methods.addTransition.call(this);
  if(this.count < this.sequence.length - 1) {
    this.count++;
    this.to();
  } 
}

_.applyTransition = function (sequence) {
  this.sequence = [this.delay].concat(sequence);
  this.count = 0;
  this.to();
}

qs('.thing').on('click', [.5,.5]);

