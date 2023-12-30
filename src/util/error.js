import { message } from "antd";

export function showUnexpectedError() {
  message.open({
    type: "error",
    content: "Unexpected error happened! Please try again.",
  });
}
export function showError(content) {
  message.open({
    type: "error",
    content: content,
  });
}
