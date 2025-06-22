import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type {Props} from '@theme/BlogLayout';
import SocialButtons from '@site/src/components/socialButtons';

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  const tocCouldBeDisplayedOnPage = Object.hasOwn(props, 'toc');
  const displaySocialSharingButtons = false; // !!tocCouldBeDisplayedOnPage;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          {displaySocialSharingButtons && (<div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'fixed', right: '30px', top: '350px' }}>
            <div style={{ maxWidth: '50px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <SocialButtons />
            </div>
          </div>)}
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
