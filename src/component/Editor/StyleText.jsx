import {
  Bold,
  Italic,
  Code,
  Underline,
  BlockQuote,
  CodeBlock,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive,
  HeaderSix,
  OrderedList,
  UnorderedList,
  DraftEditor
} from 'react-draft-editor';

class MyBold extends Bold {
  constructor(props) {
    super()
    this.state = {
      editorState: ""
    }
  }

  render() {
    const handleChange = this.handleChange.bind(this)
    const { editorState } = this.state

  	return (
      <span
        className="asdsad"
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}>
          Bold
      </span>
  	)
  }
  handleChange() {

  }
}