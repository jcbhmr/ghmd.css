import { marked } from "marked";
import "../src/index.scss";

export default {
  title: "Example Readmes",
  parameters: {
    layout: "none",
  },
  render({ repository, branch, path, colorScheme }) {
    const root = document.createElement("main");

    (async () => {
      const url = `https://raw.githubusercontent.com/${repository}/${branch}/${path}`;
      const response = await fetch(url);
      const text = await response.text();
      root.innerHTML = marked(text);
    })();

    document.body.dataset.theme = colorScheme;

    return root;
  },
};

export const DenoReadme = {
  args: {
    repository: "denoland/deno",
    branch: "main",
    path: "README.md",
    colorScheme: "dark",
  },
};
export const BunReadme = {
  args: {
    repository: "oven-sh/bun",
    branch: "main",
    path: "README.md",
    colorScheme: "light",
  },
};
export const NodeReadme = {
  args: {
    repository: "nodejs/node",
    branch: "main",
    path: "README.md",
    colorScheme: "dark",
  },
};
export const ReactReadme = {
  args: {
    repository: "facebook/react",
    branch: "main",
    path: "README.md",
    colorScheme: "light",
  },
};
