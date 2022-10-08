import { Plugin } from "obsidian";
import { Renderer } from "./chemrenderer";

export default class ChemRendererPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const codeblocks = element.querySelectorAll("code");

      for (let index = 0; index < codeblocks.length; index++) {
        const codeblock = codeblocks.item(index);
        const text = codeblock.innerText.trim();
        const isSMILES = text.substring(0,9) === "$\\SMILES{" && text[text.length - 1] === "}";


        if (isSMILES) {
          context.addChild(new Renderer(codeblock, text));
        }
      }
    });
  }
}