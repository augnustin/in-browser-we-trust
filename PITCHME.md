---?image=assets/image/ivan_televnyy.jpg

# In browser we trust

### Tame the beast!

---?image=assets/image/lukas_blazek.jpg

## Embrace the Web's openess

1. Easier to code
2. Easier to debug
3. Easier to publish & update
4. And now we make apps

It's perfect then?

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

> HTML is the **semantic** description of the page.

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

How can I bring life to my webpage? |

Javascript of course!

JS **is** the web's language

---

## 1. Code > Have you tried JS?

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

---

## 1. Code > Java**Script**

It is a scripting language!

No need to inherit from a specific class, to compile or to predeclare anything.

Freedom!

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

---?image=assets/image/lukas_blazek.jpg

## Questions?

<br>

@fa[url gp-contact](https://augustin-riedinger.fr)

@fa[twitter gp-contact](@augnustin)

## Architecture

|               | Web           | Mobile  |
| ------------- |:-------------:| :-----:|
| Since         | 1990's        | 2007 |
| Architecture  | Decentralized | Stores (Apps & Google Play) |
| Technologies  | HTML/CSS/JS   | Objective-C/Swift, Java |


<br>

@fa[arrows gp-tip](Press F to go Fullscreen)

@fa[microphone gp-tip](Press S for Speaker Notes)

---?image=assets/image/lukas_blazek.jpg

## Template Features

- Code Presenting |
- Repo Source, Static Blocks, GIST |
- Custom CSS Styling |
- Slideshow Background Image |
- Slide-specific Background Images |
- Custom Logo, TOC, and Footnotes |

---?code=src/go/server.go&lang=golang&title=Golang File

@[1,3-6](Present code found within any Git repo source file.)
@[8-18](Without ever leaving your slideshow.)
@[19-28](Using GitPitch code-presenting with (optional) annotations.)

---?image=assets/image/maarten_deckers.jpg

@title[JavaScript Block]

<p><span class="slide-title">JavaScript Block</span></p>

```javascript
// Include http module.
var http = require("http");

// Create the server. Function passed as parameter
// is called on every request made.
http.createServer(function (request, response) {
  // Attach listener on end event.  This event is
  // called when client sent, awaiting response.
  request.on("end", function () {
    // Write headers to the response.
    // HTTP 200 status, Content-Type text/plain.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end('Hello HTTP!');
  });

// Listen on the 8080 port.
}).listen(8080);
```

@[1,2](You can present code inlined within your slide markdown too.)
@[9-17](Displayed using code-syntax highlighting just like your IDE.)
@[19-20](Again, all of this without ever leaving your slideshow.)

---?gist=onetapbeyond/494e0fecaf0d6a2aa2acadfb8eb9d6e8&lang=scala&title=Scala GIST

@[23](You can even present code found within any GitHub GIST.)
@[41-53](GIST source code is beautifully rendered on any slide.)
@[57-62](And code-presenting works seamlessly for GIST too, both online and offline.)

---?image=assets/image/lukas_blazek.jpg

## Template Help

- [Code Presenting](https://github.com/gitpitch/gitpitch/wiki/Code-Presenting)
  + [Repo Source](https://github.com/gitpitch/gitpitch/wiki/Code-Delimiter-Slides), [Static Blocks](https://github.com/gitpitch/gitpitch/wiki/Code-Slides), [GIST](https://github.com/gitpitch/gitpitch/wiki/GIST-Slides)
- [Custom CSS Styling](https://github.com/gitpitch/gitpitch/wiki/Slideshow-Custom-CSS)
- [Slideshow Background Image](https://github.com/gitpitch/gitpitch/wiki/Background-Setting)
- [Slide-specific Background Images](https://github.com/gitpitch/gitpitch/wiki/Image-Slides#background)
- [Custom Logo](https://github.com/gitpitch/gitpitch/wiki/Logo-Setting), [TOC](https://github.com/gitpitch/gitpitch/wiki/Table-of-Contents), and [Footnotes](https://github.com/gitpitch/gitpitch/wiki/Footnote-Setting)

---?image=assets/image/gitpitch-audience.jpg

### <span class="white">Template Versions</span>

- #### [Base Template  @fa[external-link gp-download]](https://gitpitch.com/gitpitch/templates/timber)
- #### [Code Maximized @fa[external-link gp-download]](https://gitpitch.com/gitpitch/templates/timber?p=codemax)
- #### [Speaker Notes @fa[external-link gp-download]](https://gitpitch.com/gitpitch/templates/timber?p=speaker)

---?image=assets/image/lukas_blazek.jpg

### Questions?

<br>

@fa[twitter gp-contact](@gitpitch)

@fa[github gp-contact](gitpitch)

@fa[medium gp-contact](@gitpitch)

---?image=assets/image/gitpitch-audience.jpg

@title[Download this Template!]

### <span class="white">Get your presentation started!</span>
### [Download this template @fa[external-link gp-download]](https://gitpitch.com/template/download/timber)

