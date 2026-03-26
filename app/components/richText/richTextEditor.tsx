'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MenuBar } from './menu-bar';


interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange}: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null
  };

  return (
    <div className="block space-y-2">
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className='min-h-40 p-2 border rounded-md'/>
    </div>
  );
}