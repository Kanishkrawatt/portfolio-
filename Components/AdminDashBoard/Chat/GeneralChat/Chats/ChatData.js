import React from "react";
import {
  Textarea,
  Textdiv,
  SenderImg,
  SenderInfo,
  SenderName,
  Chatdiv,
  Chat,
} from "../GeneralChatComponents";

function ChatData(props) {
  let Data = props.data;
  return (
    <Textdiv>
      {Data.map((content, index) => {
        return (
          <Textarea key={index}>
            <SenderInfo>
              <SenderImg src="/user.png" />
              <SenderName>
                {content.FirstName} {content.LastName}
              </SenderName>
            </SenderInfo>
            <Chatdiv>
              <Chat>{content.Message}</Chat>
            </Chatdiv>
          </Textarea>
        );
      })}
    </Textdiv>
  );
}

export default ChatData;
