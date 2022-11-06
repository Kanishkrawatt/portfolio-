import styled from "styled-components";
export const GenralChatDiv = styled.div`
  height: 83vh;
  background-color: white;
  margin: 3rem 3rem 0rem;
  border-radius: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 29vw;
`;
export const GenralChatHead = styled.h1`
  padding: 3rem 3rem 1rem;
  font-size: larger;
  &::selection {
    background-color: transparent;
  }
`;
export const Textdiv = styled.div`
  width: 100%;
  padding-top: 2rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  &::selection {
    background-color: transparent;
  }
`;
export const Textarea = styled.div`
  padding: 0.5rem 1.5rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &::selection {
    background-color: transparent;
  }
`;
export const SenderImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  &::selection {
    background-color: transparent;
  }
`;
export const SenderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  &::selection {
    background-color: transparent;
  }
`;
export const SenderName = styled.h1`
  font-size: larger;
  &::selection {
    background-color: transparent;
  }
`;
export const Chat = styled.p`
  font-size: smaller;
  color: lightgray;
  &::selection {
    background-color: transparent;
  }
`;
export const Chatdiv = styled.div`
  display: flex;
  padding-left: 4rem;
`;

export const TextInput = styled.div`
  padding: 2rem;
  &::selection {
    background-color: transparent;
  }
`;
export const Input = styled.input`
  padding: 0.75rem 1.5rem;
  width: 18rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const Button = styled.button`
  background-color: white;
  padding: 0.75rem 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
