# Docsify - Commento Plug-in

Little plug-in to allow the use of [commento](https://commento.io) on your docsify pages.

This will simply append the commento div to the end of each of your pages. 

### Install

First sign-up for the cloud hosted version of commento, or install the self-hosted version.

After installed, login and add a new domain to your commento dashboard. 

Once a domain has been added, they will give you the **universal snippet** which includes the URL to your very own `commento.js` file. 

Then copy the URL to your `commento.js` from the instance and add it to our `commento.js` file from this repository. 

Finally, simply include our `commento.js` from this repo in your `index.html` like all other docsify plugins.

```html
<script src="dist/js/commento.js"></script>
```

[AGPLv3](https://raw.githubusercontent.com/ndom91/docsify-commento/master/LICENSE)
