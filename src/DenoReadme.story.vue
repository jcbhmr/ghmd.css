<script setup>
import "./index.scss";
</script>

<template>
  <Story>
    <h1 id="deno">Deno</h1>
    <p>
      <a href="https://crates.io/crates/deno"
        ><img src="https://img.shields.io/crates/v/deno.svg" alt=""
      /></a>
      <a href="https://twitter.com/intent/follow?screen_name=deno_land"
        ><img
          src="https://img.shields.io/twitter/follow/deno_land.svg?style=social&amp;label=Follow"
          alt="Twitter badge"
      /></a>
      <a href="https://discord.gg/deno"
        ><img
          src="https://img.shields.io/discord/684898665143206084?logo=discord&amp;style=social"
          alt="Discord badge"
      /></a>
      <a href="https://www.youtube.com/@deno_land"
        ><img
          src="https://img.shields.io/youtube/channel/subscribers/UCqC2G2M-rg4fzg1esKFLFIw?style=social"
          alt="YouTube badge"
      /></a>
    </p>
    <p>
      <img
        align="right"
        src="https://deno.land/logo.svg"
        height="150px"
        alt="the deno mascot dinosaur standing in the rain"
      />
    </p>
    <p>
      <a href="https://deno.com/runtime">Deno</a> is a <em>simple</em>,
      <em>modern</em> and <em>secure</em> runtime for
      <strong>JavaScript</strong> and <strong>TypeScript</strong> that uses V8
      and is built in Rust.
    </p>
    <h3 id="features">Features</h3>
    <ul>
      <li>
        <a href="https://deno.land/manual/basics/permissions"
          >Secure by default.</a
        >
        No file, network, or environment access, unless explicitly enabled.
      </li>
      <li>
        Provides
        <a href="https://deno.land/manual/runtime/web_platform_apis"
          >web platform functionality and APIs</a
        >, e.g. using ES modules, web workers, and <code>fetch()</code>.
      </li>
      <li>
        Supports
        <a href="https://deno.land/manual/advanced/typescript"
          >TypeScript out of the box</a
        >.
      </li>
      <li>Ships only a single executable file.</li>
      <li>
        <a href="https://deno.land/manual/tools#built-in-tooling"
          >Built-in tooling</a
        >
        including <code>deno test</code>, <code>deno fmt</code>,
        <code>deno bench</code>, and more.
      </li>
      <li>
        Includes
        <a href="https://deno.land/std/">a set of reviewed standard modules</a>
        guaranteed to work with Deno.
      </li>
      <li><a href="https://deno.land/manual/node">Supports npm.</a></li>
    </ul>
    <h3 id="install">Install</h3>
    <p>Shell (Mac, Linux):</p>
    <pre><code class="lang-sh">curl -fsSL http<span class="hljs-variable">s:</span>//deno.land/install.<span class="hljs-keyword">sh</span> | <span class="hljs-keyword">sh</span>
</code></pre>
    <p>PowerShell (Windows):</p>
    <pre><code class="lang-powershell">irm <span class="hljs-string">https:</span><span class="hljs-comment">//deno.land/install.ps1 | iex</span>
</code></pre>
    <p><a href="https://formulae.brew.sh/formula/deno">Homebrew</a> (Mac):</p>
    <pre><code class="lang-sh"><span class="hljs-keyword">brew </span><span class="hljs-keyword">install </span>deno
</code></pre>
    <p>
      <a href="https://chocolatey.org/packages/deno">Chocolatey</a> (Windows):
    </p>
    <pre><code class="lang-powershell">choco <span class="hljs-keyword">install</span> deno
</code></pre>
    <p><a href="https://scoop.sh/">Scoop</a> (Windows):</p>
    <pre><code class="lang-powershell"><span class="hljs-keyword">scoop </span><span class="hljs-keyword">install </span>deno
</code></pre>
    <p>
      Build and install from source using
      <a href="https://crates.io/crates/deno">Cargo</a>:
    </p>
    <pre><code class="lang-sh"><span class="hljs-comment"># Install the Protobuf compiler</span>
apt <span class="hljs-keyword">install </span>-y protobuf-compiler <span class="hljs-comment"># Linux</span>
<span class="hljs-keyword">brew </span><span class="hljs-keyword">install </span>protobuf <span class="hljs-comment"># macOS</span>

<span class="hljs-comment"># Build and install Deno</span>
cargo <span class="hljs-keyword">install </span>deno --locked
</code></pre>
    <p>
      See
      <a href="https://github.com/denoland/deno_install/blob/master/README.md"
        >deno_install</a
      >
      and <a href="https://github.com/denoland/deno/releases">releases</a> for
      other options.
    </p>
    <h3 id="getting-started">Getting Started</h3>
    <p>
      Try
      <a href="https://examples.deno.land/hello-world"
        >running a simple program</a
      >:
    </p>
    <pre><code class="lang-sh">deno <span class="hljs-built_in">run</span> https:<span class="hljs-comment">//deno.land/std/examples/welcome.ts</span>
</code></pre>
    <p>
      Or
      <a href="https://examples.deno.land/http-server"
        >setup a simple HTTP server</a
      >:
    </p>
    <pre><code class="lang-ts">Deno.serve(<span class="hljs-function"><span class="hljs-params">(_req)</span> =&gt;</span> <span class="hljs-keyword">new</span> Response(<span class="hljs-string">"Hello, World!"</span>));
</code></pre>
    <p><a href="https://examples.deno.land">More Examples</a></p>
    <h3 id="additional-resources">Additional Resources</h3>
    <ul>
      <li>
        <strong><a href="https://deno.land/manual">The Deno Manual</a></strong>
        is a great starting point for
        <a href="https://deno.land/manual/examples">additional examples</a>,
        <a
          href="https://deno.land/manual/getting_started/setup_your_environment"
          >setting up your environment</a
        >, <a href="https://deno.land/manual/node">using npm</a>, and more.
      </li>
      <li>
        <strong
          ><a href="https://deno.land/api">Runtime API reference</a></strong
        >
        documents all APIs built into Deno CLI.
      </li>
      <li>
        <strong
          ><a href="https://deno.land/std">Deno Standard Modules</a></strong
        >
        do not have external dependencies and are reviewed by the Deno core
        team.
      </li>
      <li>
        <strong><a href="https://deno.land/x">deno.land/x</a></strong> is the
        registry for third party modules.
      </li>
      <li>
        <strong><a href="https://deno.com/blog">Blog</a></strong> is where the
        Deno team shares important product updates and “how to”s about solving
        technical problems.
      </li>
    </ul>
    <h3 id="contributing">Contributing</h3>
    <p>We appreciate your help!</p>
    <p>
      To contribute, please read our
      <a href="https://deno.land/manual/references/contributing/"
        >contributing instructions</a
      >.
    </p>
  </Story>
</template>
