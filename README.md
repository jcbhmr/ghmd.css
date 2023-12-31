# `ghmd.css`

🎨 Make your webpage look like a GitHub Markdown document

<p align=center>
  <img src="https://i.imgur.com/F9TGI7F.png">
</p>

## Installation

The recommended way to use this project is on an existing HTML page to apply a
basic GitHub-like style to Markdown-like HTML content. This is similar to other
[classless CSS themes] like [MVP.css], [Water.css], [new.css], etc.

```html
<link rel="stylesheet" href="https://unpkg.com/ghmd.css@1" />
```

You can also install this CSS theme as a dependency in your project using npm,
[pnpm], [Yarn] or your favorite Node.js package manager. Note that all the
styles are **global** and will affect all elements on the page. You can mitigate
this by using a [shadow root] if you do want to scope the CSS to a specific
component.

```sh
npm install ghmd.css
```

## Usage

Just write normal HTML! `<h1>`, `<p>`, `<ul>`, etc. all get styled to match the
GitHub Markdown style.

<table align=center><td>

```html
<link ... />
<h1>Hello world!</h1>
<p>This is a list of things:</p>
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

<td>

![](https://i.imgur.com/iNrqPQX.png)

</table>

If you're feeling adventurous, you can use a Markdown ➡ HTML converter like
[marked] to dynamically show Markdown content on your page in the GitHub
Markdown style.

```html
<link rel="stylesheet" href="https://unpkg.com/ghmd.css@1" />
<script type="module">
  import { marked } from "https://esm.run/marked@9";
  const response = await fetch("https://example.com/README.md");
  const text = await response.text();
  const html = marked(text);
  document.body.innerHTML = html;
</script>
```

For more advanced usage, you can scope the globally applied CSS using the
[shadow DOM] with a [shadow root].

```html
<div id="markdown">
  <h1>Hello world!</h1>
  <p>This is a list of things:</p>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
<script type="module">
  const div = document.getElementById("markdown");
  const shadow = div.attachShadow({ mode: "open" });
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/ghmd.css@1";
  shadow.append(link);
  shadow.append(...div.childNodes);
</script>
```

If you're using [React], [react-shadow-root] is good abstraction over the manual
JavaScript shown above. For [Vue], you can use the [vue-shadow-dom].

<!-- prettier-ignore-start -->
[marked]: https://marked.js.org/
[classless CSS themes]: https://github.com/topics/classless
[MVP.css]: https://andybrewer.github.io/mvp/
[Water.css]: https://watercss.kognise.dev/
[new.css]: https://newcss.net/
[pnpm]: https://pnpm.io/
[Yarn]: https://yarnpkg.com/
[shadow DOM]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
[shadow root]: https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
[React]: https://reactjs.org/
[Vue]: https://vuejs.org/
[react-shadow-root]: https://apearce.github.io/react-shadow-root/
[vue-shadow-dom]: https://npmjs.com/package/vue-shadow-dom
<!-- prettier-ignore-end -->
