Miso.Events
============


Miso.Events is a small collection of methods that enables an object to publish events and allows others to subscribe to it.

To add it to your code, mix it in like so:

```javascript
var yourObject = {};
_.extend(yourObject, Miso.Events);
```

If you have a constructor, make sure to extend the prototype:
```javascript
var YourObject = function() {};
_.extend(YourObject.prototype, Miso.Events);
```

## API

### Publishing

`this.publish(name, *...)`

Allows an evented object to publish/broadcast an event to its subscribers.

#### Example 

```javascript
var myObject = function(){
  this.publish('initialized', 1, 2, 3);
};
```

### Subscribing

`anObject.subscribe(name, callback, options)`

Allows one to subscribe to events events.

Options can include:

* `context` - an alternate context rather than the object itself.
* `token` - a Unique token by which the subscription is identified
* `priority` - Allows rearranging the existing callbacks by priority.

#### Example

```javascript
var myObject = {};
_.extend(myObject, Miso.Events);

myObject.subscribe('greet', function() {
  console.log("say hi");
});
```

### Subscribing Once

`anObject.subscribeOnce(name, callback, options);

When wanting to react to an event only the first time it triggers, use the subscribeOnce method. The rest of the parameters are identical to the `subscribe` ones.

### Unsubscribe

Allows unsubscringing from a specific event.

`myObject.unsubscribe(name, identifier)`

The identifeir can be:

* a callback
* a token

You can omit the identifier to unsubscribe all events for a particular `name`.

## Contributing 

To build Miso.Events you'll need npm, node.js's package management system and grunt

`npm install`

To build Miso.Events, call

`grunt`

from the project root.

## Questions?

Please submit an issue or find @iros (@ireneros on twitter) or @alexgraul. 

