# Docsify - Commento Plug-in

Plug-in to allow the use of [commento](https://commento.io) on your [docsify](https://docsify.js.org/#/) pages.

This will simply append the commento `div` to the end of each of your pages. 

### 🚧 Install

1. Sign-up for the cloud hosted version of Commento / install the self-hosted version
2. Login to your commento instance and add the domain of your Docsify site
3. Copy the URL to your `commento.js` file from commento's **universal snippet**
4. Add it our `commento.js` file from this repo, on line `9` so that

This:
> ```js
>e.src = "[COMMENTO JS URL]", a.appendTo(a.body, e);
> ```

Turns into this:
> ```js
>e.src = "https://commento.mydomain.org/js/commento.js", a.appendTo(a.body, e);
> ```

5. Include our `commento.js` in your Docsify `index.html` like all other plugins
```html
<script src="dist/js/commento.js"></script>
```

[MIT](https://opensource.org/licenses/MIT)
