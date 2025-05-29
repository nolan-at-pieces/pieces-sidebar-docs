
import { Components } from 'react-markdown';

export interface CustomTableComponentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export interface ImageProps {
  src?: string;
  alt?: string;
  caption?: string;
  [key: string]: unknown;
}

export interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export interface DivProps {
  children?: React.ReactNode;
  'data-callout'?: string;
  'data-title'?: string;
  'data-steps'?: string;
  'data-step'?: string;
  'data-step-title'?: string;
  [key: string]: unknown;
}

export interface HeadingProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export interface CodeProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export interface ListProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export interface CustomComponents extends Components {
  ExpandableImage?: React.ComponentType<ImageProps>;
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}
