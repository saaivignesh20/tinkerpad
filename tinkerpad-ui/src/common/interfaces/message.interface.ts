/** Type for Message Author */
export type MessageAuthor = 'user' | 'assistant';

/** Interface for Message */
export interface Message {
  id: string;
  author: MessageAuthor;
  content: string;
  timestamp: Date;
}
