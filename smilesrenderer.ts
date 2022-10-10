import { MarkdownRenderChild } from "obsidian";
import { Molecule, StructureView, StructureEditor } from "openchemlib/full"

export class Renderer extends MarkdownRenderChild {
  text: string;

  constructor(containerEl: HTMLElement, text: string) {
    super(containerEl);

    this.text = text;
  }

  onload() {
    if (this.text){
      // const Mol = Molecule.fromSmiles(this.text);
      // const molEl = this.containerEl.createEl("canvas", { cls: "molecule_canvas" });
      // StructureView.drawMolecule(molEl, Mol);
      // this.containerEl.replaceWith(molEl);
    
      const ed = StructureEditor.createEditor("editor");
      // ed.setChangeListenerCallback((a, molecule) => {
      //   console.log(molecule.toSmiles());
      // });
      console.log(this.text);
      ed.setSmiles(this.text);
      this.containerEl.replaceWith(ed);
    }
  }

  onunload(): void {
  }
}