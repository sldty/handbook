import {EditorState, basicSetup} from "@codemirror/basic-setup"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {javascript} from "@codemirror/lang-javascript"
import {html} from "@codemirror/lang-html"
import {css} from "@codemirror/lang-css"

const doc = `if (true) {
  console.log("okay")
} else {
  console.log("oh no")
}
`

var editor = new EditorView({
  state: EditorState.create({
    doc,
    extensions: [
      basicSetup,
      keymap.of([indentWithTab]),
      html(),
    ]
  }),
  parent: document.querySelector("#editor"),
})

