/** Type for the Knowledge Source */
export type KnowledgeSourceType = 'file' | 'web';

/** Interface for the Knowledge Source */
export interface KnowledgeSource {
  id: string;
  name: string;
  type: KnowledgeSourceType;
  fileExtension?: string;
  url: string;
}
