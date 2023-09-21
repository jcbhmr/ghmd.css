<script setup>
import "./index.scss";
</script>

<template>
  <Story>
    <p align="center">
      <a href="https://bun.sh"
        ><img
          src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png"
          alt="Logo"
          height="170"
      /></a>
    </p>
    <h1 align="center">Bun</h1>

    <p align="center">
      <a href="https://bun.sh/discord" target="_blank"
        ><img
          height="20"
          src="https://img.shields.io/discord/876711213126520882"
      /></a>
      <img src="https://img.shields.io/github/stars/oven-sh/bun" alt="stars" />
      <a href="https://twitter.com/jarredsumner/status/1542824445810642946"
        ><img
          src="https://img.shields.io/static/v1?label=speed&message=fast&color=success"
          alt="Bun speed"
      /></a>
    </p>

    <div align="center">
      <a href="https://bun.sh/docs">Documentation</a>
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      <a href="https://discord.com/invite/CXdq2DP29u">Discord</a>
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      <a href="https://github.com/oven-sh/bun/issues/new">Issues</a>
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      <a href="https://github.com/oven-sh/bun/issues/159">Roadmap</a>
      <br />
    </div>

    <h3 id="-read-the-docs-https-bun-sh-docs-">
      <a href="https://bun.sh/docs">Read the docs →</a>
    </h3>
    <h2 id="what-is-bun-">What is Bun?</h2>
    <blockquote>
      <p>
        <strong>​​Bun is under active development.</strong> Use it to speed up
        your development workflows or run simpler production code in
        resource-constrained environments like serverless functions. We&#39;re
        working on more complete Node.js compatibility and integration with
        existing frameworks. Join the
        <a href="https://bun.sh/discord">Discord</a> and watch the
        <a href="https://github.com/oven-sh/bun">GitHub repository</a> to keep
        tabs on future releases.
      </p>
    </blockquote>
    <p>
      Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships
      as a single executable called <code>bun​</code>.
    </p>
    <p>
      At its core is the <em>Bun runtime</em>, a fast JavaScript runtime
      designed as a drop-in replacement for Node.js. It&#39;s written in Zig and
      powered by JavaScriptCore under the hood, dramatically reducing startup
      times and memory usage.
    </p>
    <pre><code class="lang-bash">bun run <span class="hljs-keyword">index</span>.tsx             # TS <span class="hljs-keyword">and</span> JSX supported <span class="hljs-keyword">out</span> <span class="hljs-keyword">of</span> the box
</code></pre>
    <p>
      ​​The <code>bun​</code> command-line tool also implements a test runner,
      script runner, and Node.js-compatible package manager. Instead of 1,000
      node_modules for development, you only need <code>bun</code>. Bun&#39;s
      built-in tools are significantly faster than existing options and usable
      in existing Node.js projects with little to no changes.
    </p>
    <pre><code class="lang-bash"><span class="hljs-keyword">bun </span>test                      <span class="hljs-comment"># run tests</span>
<span class="hljs-keyword">bun </span>run start                 <span class="hljs-comment"># run the `start` script in `package.json`</span>
<span class="hljs-keyword">bun </span><span class="hljs-keyword">install </span>&lt;pkg&gt;​             <span class="hljs-comment"># install a package</span>
<span class="hljs-keyword">bunx </span>cowsay <span class="hljs-string">'Hello, world!'</span>   <span class="hljs-comment"># execute a package</span>
</code></pre>
    <h2 id="install">Install</h2>
    <p>
      Bun supports Linux (x64 &amp; arm64) and macOS (x64 &amp; Apple Silicon).
    </p>
    <blockquote>
      <p>
        <strong>Linux users</strong> — Kernel version 5.6 or higher is strongly
        recommended, but the minimum is 5.1.
      </p>
      <p>
        <strong>Windows users</strong> — Bun does not currently provide a native
        Windows build. We&#39;re working on this; progress can be tracked at
        <a href="https://github.com/oven-sh/bun/issues/43">this issue</a>. In
        the meantime, use one of the installation methods below for Windows
        Subsystem for Linux.
      </p>
    </blockquote>
    <pre><code class="lang-sh"># <span class="hljs-keyword">with</span> install script (recommended)
curl -fsSL https:<span class="hljs-comment">//bun.sh/install | bash</span>

# <span class="hljs-keyword">with</span> npm
npm install -g bun

# <span class="hljs-keyword">with</span> Homebrew
brew tap oven-sh/bun
brew install bun

# <span class="hljs-keyword">with</span> Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=<span class="hljs-number">-1</span>:<span class="hljs-number">-1</span> oven/bun
</code></pre>
    <h3 id="upgrade">Upgrade</h3>
    <p>To upgrade to the latest version of Bun, run:</p>
    <pre><code class="lang-sh"><span class="hljs-keyword">bun </span>upgrade
</code></pre>
    <p>
      Bun automatically releases a canary build on every commit to
      <code>main</code>. To upgrade to the latest canary build, run:
    </p>
    <pre><code class="lang-sh">bun upgrade <span class="hljs-comment">--canary</span>
</code></pre>
    <p>
      <a href="https://github.com/oven-sh/bun/releases/tag/canary"
        >View canary build</a
      >
    </p>
    <h2 id="quick-links">Quick links</h2>
    <ul>
      <li>
        Intro
        <ul>
          <li><a href="https://bun.sh/docs/index">What is Bun?</a></li>
          <li><a href="https://bun.sh/docs/installation">Installation</a></li>
          <li><a href="https://bun.sh/docs/quickstart">Quickstart</a></li>
        </ul>
      </li>
      <li>
        CLI
        <ul>
          <li>
            <a href="https://bun.sh/docs/cli/run"><code>bun run</code></a>
          </li>
          <li>
            <a href="https://bun.sh/docs/cli/install"
              ><code>bun install</code></a
            >
          </li>
          <li>
            <a href="https://bun.sh/docs/cli/test"><code>bun test</code></a>
          </li>
          <li>
            <a href="https://bun.sh/docs/cli/create"><code>bun create</code></a>
          </li>
          <li>
            <a href="https://bun.sh/docs/cli/bunx"><code>bunx</code></a>
          </li>
        </ul>
      </li>
      <li>
        Runtime
        <ul>
          <li><a href="https://bun.sh/docs/runtime/index">Runtime</a></li>
          <li>
            <a href="https://bun.sh/docs/runtime/modules">Module resolution</a>
          </li>
          <li>
            <a href="https://bun.sh/docs/runtime/hot"
              >Hot &amp; live reloading</a
            >
          </li>
          <li><a href="https://bun.sh/docs/bundler/plugins">Plugins</a></li>
        </ul>
      </li>
      <li>
        Ecosystem
        <ul>
          <li><a href="https://bun.sh/docs/ecosystem/nodejs">Node.js</a></li>
          <li>
            <a href="https://bun.sh/docs/ecosystem/typescript">TypeScript</a>
          </li>
          <li><a href="https://bun.sh/docs/ecosystem/react">React</a></li>
          <li><a href="https://bun.sh/docs/ecosystem/elysia">Elysia</a></li>
          <li><a href="https://bun.sh/docs/ecosystem/hono">Hono</a></li>
          <li><a href="https://bun.sh/docs/ecosystem/express">Express</a></li>
          <li>
            <a href="https://github.com/apvarun/awesome-bun">awesome-bun</a>
          </li>
        </ul>
      </li>
      <li>
        API
        <ul>
          <li><a href="https://bun.sh/docs/api/http">HTTP</a></li>
          <li><a href="https://bun.sh/docs/api/websockets">WebSockets</a></li>
          <li><a href="https://bun.sh/docs/api/tcp">TCP Sockets</a></li>
          <li><a href="https://bun.sh/docs/api/file-io">File I/O</a></li>
          <li><a href="https://bun.sh/docs/api/sqlite">SQLite</a></li>
          <li>
            <a href="https://bun.sh/docs/api/file-system-router"
              >FileSystemRouter</a
            >
          </li>
          <li><a href="https://bun.sh/docs/api/globals">Globals</a></li>
          <li><a href="https://bun.sh/docs/api/spawn">Spawn</a></li>
          <li><a href="https://bun.sh/docs/api/transpiler">Transpiler</a></li>
          <li><a href="https://bun.sh/docs/api/console">Console</a></li>
          <li><a href="https://bun.sh/docs/api/ffi">FFI</a></li>
          <li>
            <a href="https://bun.sh/docs/api/html-rewriter">HTMLRewriter</a>
          </li>
          <li><a href="https://bun.sh/docs/api/test">Testing</a></li>
          <li><a href="https://bun.sh/docs/api/utils">Utils</a></li>
          <li><a href="https://bun.sh/docs/api/node-api">Node-API</a></li>
        </ul>
      </li>
    </ul>
    <h2 id="contributing">Contributing</h2>
    <p>
      Refer to the
      <a href="https://bun.sh/docs/project/development"
        >Project &gt; Development</a
      >
      guide to start contributing to Bun.
    </p>
    <h2 id="license">License</h2>
    <p>
      Refer to the
      <a href="https://bun.sh/docs/project/licensing">Project &gt; License</a>
      page for information about Bun&#39;s licensing.
    </p>
  </Story>
</template>
