import React, { useCallback, useState, useRef } from 'react';
import {
  Editor as DraftEditor,
  EditorState,
  ContentState,
  SelectionState,
  Modifier
} from 'draft-js';

type Props = {
  defaultValue?: string;
  onBlur: (value: string) => void;
};

const Editor = ({ defaultValue, onBlur }: Props) => {
  const editorRef = useRef<DraftEditor>(null);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(defaultValue || ''))
  );

  const resetText = useCallback(() => {
    setEditorState(state => {
      let contentState = state.getCurrentContent();
      onBlur(contentState.getPlainText());
      const firstBlock = contentState.getFirstBlock();
      const lastBlock = contentState.getLastBlock();
      const allSelected = new SelectionState({
        anchorKey: firstBlock.getKey(),
        anchorOffset: 0,
        focusKey: lastBlock.getKey(),
        focusOffset: lastBlock.getLength(),
        hasFocus: true
      });
      contentState = Modifier.removeRange(contentState, allSelected, 'backward');
      state = EditorState.push(state, contentState, 'remove-range');
      state = EditorState.forceSelection(state, contentState.getSelectionAfter());
      editorRef.current!.blur();
      return state;
    });
  }, []);

  const onEditorChange = useCallback(
    (editorState: EditorState) => {
      const focused = editorState.getSelection().getHasFocus();
      if (focused) {
        setEditorState(editorState);
      } else {
        const hasText = editorState.getCurrentContent().hasText();
        if (hasText) {
          resetText();
        } else if (editorRef.current) {
          editorRef.current.blur();
        }
      }
    },
    [resetText]
  );

  const onEditorBlur = useCallback(() => {
    onBlur(editorState.getCurrentContent().getPlainText());
  }, [onBlur]);

  return (
    <DraftEditor
      editorState={editorState}
      onChange={onEditorChange}
      onBlur={onEditorBlur}
      ref={editorRef}
    />
  );
};

export default Editor;
