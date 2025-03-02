import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { ComponentProps } from 'react';

function Code({ children, ...props }: JSX.IntrinsicAttributes & { children?: React.ReactNode }) {
  const codeHTML = highlight((children ?? '') as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Link(props: ComponentProps<'a'>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}

const components = {
  code: Code,
  a: Link,
  // You can add here more React components and use them in the mdx files
  // They will be rendered without any issues apparently
  // e.g. Counter
};

export function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components ?? {}) }} />;
}

export type MDXContentProps = MDXRemoteProps;
