
export interface Memory {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}
