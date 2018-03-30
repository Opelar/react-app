// import "draft-js/dist/Draft.css";
import "../../style/Rich.css";
import React, { Component } from "react";
import {
  Editor,
  EditorState,
  RichUtils/* ,
  DefaultDraftBlockRenderMap,
  AtomicBlockUtils,
  convertToRaw,
  Entity */
} from "draft-js";
// import {
//   Bold,
//   Italic,
//   Code,
//   Underline,
//   BlockQuote,
//   CodeBlock,
//   HeaderOne,
//   HeaderTwo,
//   HeaderThree,
//   HeaderFour,
//   HeaderFive,
//   HeaderSix,
//   OrderedList,
//   UnorderedList
// } from 'react-draft-editor/lib/index';

// import Immutable from "immutable";
import EditorHeader from "../Headers/EditorHeader";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }
  render() {
    let edState = this.state.editorState.toJS();
    console.log(edState);

    return (
      <div className="my-editor">
        <EditorHeader title={"编辑器"} />

        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />

        <div className="btn-group">
        {/* <Bold />
        <Italic /> */}
          <div className="add-img-btn">按钮组/添加图片</div>
        </div>
      </div>
    );
  }
}

export default MyEditor;
