export type MessageType = {
  id: string;
  from: { name: string };
  type: 'response' | 'message' | 'typing';
  time: string;
  text?: string;
};

export type ComponentProps = {
  from: { name: string };
  message: MessageType;
};
