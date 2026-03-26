import type { Editor } from "@tiptap/react";
import type { EditorStateSnapshot } from "@tiptap/react";

export function menuBarStateSelector(context: EditorStateSnapshot<Editor>) {
  return {
    // Text formatting
    isBold: context.editor.isActive("bold") ?? false,
    canBold: context.editor.can().chain().toggleBold().run() ?? false,
    isItalic: context.editor.isActive("italic") ?? false,
    canItalic: context.editor.can().chain().toggleItalic().run() ?? false,
    isUnderline: context.editor.can().chain().setUnderline().run() ?? false,
    isStrike: context.editor.isActive("strike") ?? false,
    canStrike: context.editor.can().chain().toggleStrike().run() ?? false,
    isCode: context.editor.isActive("code") ?? false,
    canCode: context.editor.can().chain().toggleCode().run() ?? false,
    canClearMarks: context.editor.can().chain().unsetAllMarks().run() ?? false,

    // Block types
    isParagraph: context.editor.isActive("paragraph") ?? false,
    isHeading1: context.editor.isActive("heading", { level: 1 }) ?? false,
    isHeading2: context.editor.isActive("heading", { level: 2 }) ?? false,
    isHeading3: context.editor.isActive("heading", { level: 3 }) ?? false,
    isHeading4: context.editor.isActive("heading", { level: 4 }) ?? false,
    isHeading5: context.editor.isActive("heading", { level: 5 }) ?? false,
    isHeading6: context.editor.isActive("heading", { level: 6 }) ?? false,

    // Lists and blocks
    isBulletList: context.editor.isActive("bulletList") ?? false,
    isOrderedList: context.editor.isActive("orderedList") ?? false,
    isCodeBlock: context.editor.isActive("codeBlock") ?? false,
    isBlockquote: context.editor.isActive("blockquote") ?? false,

    // History
    canUndo: context.editor.can().chain().undo().run() ?? false,
    canRedo: context.editor.can().chain().redo().run() ?? false,
  };
}
