/**
* Miso.Events - v0.0.1 - 11/16/2012
* http://github.com/misoproject/events
* Copyright (c) 2012 Alex Graul, Irene Ros;
* Dual Licensed: MIT, GPL
* https://github.com/misoproject/events/blob/master/LICENSE-MIT 
*/
(function(e,t){var n=e.Miso=e.Miso||{};n.Events={publish:function(e){var n=t.toArray(arguments);return n.shift(),this._events&&this._events[e]&&t.each(this._events[e],function(e){e.callback.apply(e.context||this,n)},this),this},subscribe:function(e,n,r){r=r||{},this._events=this._events||{},this._events[e]=this._events[e]||[];var i={callback:n,priority:r.priority||0,token:r.token||t.uniqueId("t"),context:r.context||this},s;return t.each(this._events[e],function(e,n){if(!t.isUndefined(s))return;e.priority<=i.priority&&(s=n)}),this._events[e].splice(s,0,i),i.token},subscribeOnce:function(e,n,r){this._events=this._events||{},r=r||{};var i=this;return typeof r.token=="undefined"&&(r.token=t.uniqueId("t")),this.subscribe(e,function(){i.unsubscribe(e,{token:r.token}),n.apply(this,arguments)},r)},unsubscribe:function(e,n){return t.isUndefined(this._events[e])?this:(t.isFunction(n)?this._events[e]=t.reject(this._events[e],function(e){return e.callback===n}):t.isString(n)?this._events[e]=t.reject(this._events[e],function(e){return e.token===n}):this._events[e]=[],this)}}})(this,_);