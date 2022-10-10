import { Plugin } from "obsidian";
import { Renderer } from "./smilesrenderer";

export default class ChemRendererPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const codeblocks = element.querySelectorAll("code");

      for (let index = 0; index < codeblocks.length; index++) {
        const codeblock = codeblocks.item(index);
        if (codeblock.className == "language-SMILES"){
          const text = codeblock.innerText.trim();
          context.addChild(new Renderer(codeblock, text));
      }}
    });
  }
}