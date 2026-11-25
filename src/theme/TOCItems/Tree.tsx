import React from 'react';
import Link from '@docusaurus/Link';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import TOCItemTree from '@theme-original/TOCItems/Tree';
import type { Props } from '@theme/TOCItems/Tree';
import { usefulLinks } from '@site/src/lib/usefulLinks';

// Appends the "Przydatne linki" entry to the table of contents of docs with
// `useful_links: true` in their front matter. The links live only in the TOC.
export default function TOCItemTreeWrapper(props: Props): React.ReactNode {
  const frontMatter = useDoc().frontMatter as { useful_links?: boolean };

  if (props.isChild || !frontMatter.useful_links) {
    return <TOCItemTree {...props} />;
  }

  return (
    <ul className={props.className}>
      {props.toc.map((heading) => (
        <li key={heading.id}>
          <Link
            to={`#${heading.id}`}
            className={props.linkClassName ?? undefined}
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <TOCItemTree
            isChild
            toc={heading.children}
            className={props.className}
            linkClassName={props.linkClassName}
          />
        </li>
      ))}
      <li>
        {/* Not a link, so it must not get the highlight class used by the scroll spy */}
        <span className="table-of-contents__link">Przydatne linki</span>
        <ul>
          {usefulLinks.map(({ name, url }) => (
            <li key={url}>
              <Link href={url} className={props.linkClassName ?? undefined}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
