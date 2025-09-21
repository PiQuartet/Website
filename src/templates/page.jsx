import * as React from "react";
import { graphql } from "gatsby";

export default function PageTemplate({ children, data }) {
  const title = data?.mdx?.frontmatter?.title ?? "Page";
  return (
    <main style={{ maxWidth: 840, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h1>
      <article>{children}</article>
    </main>
  );
}

export const Head = ({ data }) => {
  const title = data?.mdx?.frontmatter?.title ?? "Page";
  return <title>{title}</title>;
};

export const query = graphql\`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter { title }
    }
  }
\`;
