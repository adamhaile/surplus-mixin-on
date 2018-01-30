# surplus-mixin-on

## Declarative custom event binding for Surplus applications

Most of the time, we can attach event handlers to Surplus nodes by using the `on...={...}` DOM properties:

```javascript
<button onclick={handleClick}>Click me!</button>
```

However, this doesn't work in two cases:

1. If we're trying to attach to a custom event -- `my-custom-event` -- there are no DOM properties for it.
2. If we want to attach multiple handlers for the same event -- the DOM properties can only have one handler.

Surplus-mixin-on is a small `fn={...}` mixin for Surplus applications that addresses both of these.

```javascript
// custom events
<div fn={on('my-custom-event', handleCustomEvent)}></div>

// multiple handlers
<div fn={on('click', handleClick1)} 
     fn={on('click', handleClick2)}
><div>
```

Under the hood, surplus-mixin-on uses the `addEventListener()` method on the nodes rather than the event handler properties.