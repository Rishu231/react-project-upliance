import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../store/editorSlice";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const dispatch = useDispatch();
  const editorContent = useSelector((state) => state.editor.content);
  const userData = useSelector((state) => state.user.user);

  useEffect(() => {
    if (userData) {
      const formattedUserData = `
        <strong>Name:</strong> ${userData.name || ""} <br/>
        <strong>Address:</strong> ${userData.address || ""} <br/>
        <strong>Email:</strong> ${userData.email || ""} <br/>
        <strong>Phone:</strong> ${userData.phone || ""}
      `;
      dispatch(setContent(formattedUserData));
    }
  }, [userData, dispatch]);

  const handleChange = (content) => {
    dispatch(setContent(content));
  };

  return (
    <div className="editor">
      <ReactQuill value={editorContent} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
