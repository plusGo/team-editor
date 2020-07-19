export class TeamEditorRange {
  startContainer;
  startOffset = 0;
  endContainer;
  endOffset = 0;
  collapsed = true;

  constructor(private document: Document) {
    this.startContainer = document;
    this.endContainer = document;
  }
}
