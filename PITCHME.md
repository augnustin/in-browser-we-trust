---?image=assets/image/ivan_televnyy.jpg

# In browser we trust

### Tame the beast!

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
Javascript of course!
</div>

---

## 1. Code > JS, the web's language


```javascript

var newTitle = function(title) {
  document.title = title;
  document.querySelector('h1').innerText = title;
};

var delayedNewTitle = function(title, delayInMilliSeconds){
  setTimeout(function(){
    newTitle(title);
  }, delayInMilliSeconds);
};

newTitle('I changed my title');
delayedNewTitle('Hello', 1000);
delayedNewTitle('World', 2000);

```

Let's try it

---

## 1. Code > Java**Script**

> "Java and Javascript are similar like Car and Carpet are similar."

It is a scripting language!

No need to inherit from a specific class, to compile or to predeclare anything.

---

## 2. Debug > Everything's accessible

Let's open a debugger console: type `Ctrl` + `Shift` + `i`.

It is available **on every website**

---

## 2. Debug > What is there?

- DOM (HTML content)
- Styles (CSS content)
- Console (JS REPL)
- Source files
- Network logguer
- Performance analyser
- Memory analyser
- ... and much more!

=> This is a very powerful tool!

---

## 3. Publish > The URL magic

To publish, you basically only need a URL.

=> No need to register to a store

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

Let's create a page that displays a Chuck Norris Joke.

---

## 5. > Caveats

- Browser compatibility
- JS is flexible, ... too much!

---

## Questions?

<br>

@fa[link gp-contact](https://augustin-riedinger.fr)

[@fa[twitter gp-contact](@augnustin)](https://twitter.com/Augnustin)