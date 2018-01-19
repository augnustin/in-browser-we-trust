---?image=assets/image/ivan_televnyy.jpg

# In browser we trust

### Tame the beast!

https://github.com/augnustin/in-browser-we-trust

---

## Embrace the Web's openess

1. Easier to code
2. Easier to debug
3. Easier to publish & update
4. And now we make apps

Is it perfect then?

![](assets/image/smiling-face-with-heart-eyes.png)

Everything comes at a cost, we'll discuss the tradeoffs.

---

## 1. Code > You know HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
</head>
<body>
  <h1>My Title</h1>
  <p>My paragraph</p>
  <img src="image.jpg" alt="My image" />
  <button>My Button</button>
</body>
</html>
```

HTML is the **semantic** description of the page.

---

## 1. Code > You know CSS, right?

```
  body {
    background-color: #eee;
    font-family: 'Open-Sans', sans-serif;
    font-size: 15px;
  }

  h1 {
    color: blue;
  }
```

CSS describes the styling rules of the page (color, sizes, positions etc. etc.).

---

## 1. Code > Move your body

But this is all very static.

How can I bring life to my webpage?

![](assets/image/giphy.gif)

<div class="fragment">
<strong>Javascript</strong> of course!
</div>

---

## 1. Code > Java**Script**

> "Java and Javascript are similar like Car and Carpet are similar."

It is a **scripting** language!

No need to inherit from a specific class, to compile or to predeclare anything.

---

## 1. Code > a JS Snippet

```javascript
var newTitle = function(title) {
  document.title = title;
  document.querySelector('h1').innerText = title;
};

var delayedNewTitle = function(title, delayInMilliSeconds){
  setTimeout(function(){ newTitle(title); }, delayInMilliSeconds);
};

newTitle('I changed my title');
delayedNewTitle('Hello', 1000);
delayedNewTitle('World', 2000);
```

Let's try it

---

## 2. Debug > Everything's accessible

Let's open a debugger console: type `Ctrl`/`Cmd` + `Shift` + `i`.

It is available **on every website**

---

## 2. Debug > What is there?

- DOM (HTML content) |
- Styles (CSS content) |
- Console JS |
- Source files |
- Network logguer |
- Performance analyser |
- Memory analyser |
- ... and much more! |

<p class="fragment">=> This is a very powerful tool!</p>

---?image=assets/image/Block-CDN.jpg

<div class="inverted-colors">
  <h2>3. Publish > The URL magic</h2>

  <p>To publish, you basically only need a URL.</p>

  <p>Decentralized => No need to register to a store</p>
</div>

---?image=assets/image/Block-CDN.jpg

<div class="inverted-colors">
  <h2>3. Publish > Update</h2>

  <p>To update, you simply need to replace the file on the server</p>

  <p>=> No need to publish a new version and hope that the user will upgrade</p>
</div>

---

## 4. Apps > The new era

Thanks to frameworks like [React](https://reactjs.org/) or [Angular](https://angularjs.org/).

Examples:
- gmail
- slack
- deezer
- google maps
- etc.

---

## Practice!

Let's create a page that displays a Chuck Norris Joke thanks to the [Chuck Norris API](http://www.icndb.com/api/).

---

## Caveats

- Browser compatibility: Internet Explorer, mobile browsers etc.
- JS is flexible, ... too much?: No type, global variables
- Code is client-side: the developer can only *suggest* a behavior

---

## Go learn it!

Here at **Wild Code School** !

Online (the web is full of resources):

- https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web
- https://internetingishard.com/html-and-css/introduction/
- https://learn.shayhowe.com/html-css/
- etc.

---

## Questions?

@fa[link gp-contact]() https://augustin-riedinger.fr

@fa[twitter gp-contact]() [@augnustin](https://twitter.com/Augnustin)

> Source code of this presentation: https://github.com/augnustin/in-browser-we-trust