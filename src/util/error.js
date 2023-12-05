import { message } from "antd";

export function showUnexpectedError() {
  message.open({
    type: "error",
    content: "Unexpected error happened! Please try again.",
  });
}
