import React, { useEffect } from "react";
import SimpleMDE from "react-simplemde-editor";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "easymde/dist/easymde.min.css";
import "./MarkdownEditor.scss";


const MarkdownEditor = ({ value, onChange, onSave, onHTMLChange }) => {
  const renderHTML = () => {
    const dirtyHTML = marked(value || "");
    return DOMPurify.sanitize(dirtyHTML);
  };
  useEffect(() => {
    if (onHTMLChange) {
      const html = renderHTML();
      onHTMLChange(html);
    }
  }, [value, onHTMLChange]);
  const handleSaveContentMarkdown = () => {
    const html = renderHTML();
    console.log("📥 Markdown content:", value);
    console.log("📤 HTML converted:", html);
    if (onSave) onSave();
  };

  return (
    <div className="markdown-container">
      <div className="markdown-edit-container">
        <h2>📝 Markdown Editor</h2>
        <SimpleMDE value={value} onChange={onChange} />
      </div>

      <div className="markdown-preview-container">
        <h3>👁️ Xem trước:</h3>
        <div
          className="markdown-preview"
          dangerouslySetInnerHTML={{ __html: renderHTML() }}
        />
      </div>

      <button
        className="save-content-markdown"
        onClick={handleSaveContentMarkdown}
      >
        Lưu
      </button>
    </div>
  );
};

export default MarkdownEditor;
