import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import type {Props as BlogPostItemsProps} from '@theme/BlogPostItems';
import MDXContent from '@theme/MDXContent';
import type {BlogPostItemProps} from '@theme/BlogPostItem/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.


import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';

import SurveyBroadcast from '@site/src/components/surveyBroadcast';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Link } from "react-router-dom";


export default function BlogPostItems({
  items
}: BlogPostItemsProps): JSX.Element {

  // const result = useDocusaurusContext();
  // const docusaurusConfigPostsPerPageCount = result.siteConfig.presets[0][1].blog.postsPerPage;

  return (
    <div>
      {items.map(({content: BlogPostContent}) => {
        const blogPost = BlogPostContent.metadata;

        const date = DateTime.fromISO(blogPost.date).toLocaleString(DateTime.DATE_MED);
        return (
          <div>
            <Link to={{pathname: blogPost.permalink}}>
              <img src={BlogPostContent.assets.image} />
              {/* <div style={{ borderRadius: '4px 0 0 4px', width: '100%', backgroundImage: `url(${BlogPostContent.assets.image})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '1/1' }}> */}
              {/* </div> */}
            </Link>
            <div style={{ padding: '1rem 1rem 1rem 2rem' }}>
              <h2><Link to={{pathname: blogPost.permalink}}>{blogPost.title}</Link></h2>
              <small>{date}</small>
              <div>{blogPost.description}</div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}