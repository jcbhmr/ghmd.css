import { marked } from "marked";
import "../src/index.scss";

export default {
  title: "Markdown tests",
};

export const MarkdownCrashTest = {
  parameters: {
    layout: "none",
  },
  render({ colorScheme }) {
    const root = document.createElement("main");

    (async () => {
      const url = `https://raw.githubusercontent.com/RoneoOrg/markdown/main/README.md`;
      const response = await fetch(url);
      const text = await response.text();
      root.innerHTML = marked(text);
    })();

    document.body.dataset.theme = colorScheme;

    return root;
  },
  args: {
    colorScheme: "dark",
  },
};
