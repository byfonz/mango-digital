import type { Editor } from "@tiptap/react";
import { useEditorState } from "@tiptap/react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Button } from "../ui/button";
import { 
    LucideBold,
    LucideItalic,
    LucideUnderline,
    LucideStrikethrough,
} from "lucide-react";
import { menuBarStateSelector } from "./menuBarState";

interface Props {
    editor: Editor;
}

export const MenuBar = ({ editor }: Props) => {
    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
    });

    if (!editor) {
       return null 
    };

    return (
        <ButtonGroup>
            {/* Bold */}
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editorState.isBold ? 'is-active' : ''}
            >
                <LucideBold/>
            </Button>
            {/* Italic */}
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editorState.isItalic ? 'is-active' : ''}
            >
                <LucideItalic/>
            </Button>
            {/* Underline */}
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editorState.isUnderline ? 'is-active' : ''}
            >
                <LucideUnderline/>
            </Button>
            {/* Strike */}
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editorState.isStrike ? 'is-active' : ''}
            >
                <LucideStrikethrough/>
            </Button>
        </ButtonGroup>
    )
}