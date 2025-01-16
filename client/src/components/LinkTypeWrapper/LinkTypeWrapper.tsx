import {Tag, Link as TrussLink} from '@trussworks/react-uswds';
import {Link, useIntl} from 'gatsby-plugin-intl';
import React from 'react';

import {IDefineMessage} from '../../data/copy/common';
import * as styles from './LinkTypeWrapper.module.scss';

export type TagVariant = 'primary' | 'secondary' | 'accent';

export interface ILinkTypeWrapper {
    [x: string]: any;
    linkText?: string | JSX.Element;
    internal?: boolean;
    url: string | IDefineMessage;
    openUrlNewTab?: boolean;
    className?: string;
    dataCy?: string;
    tag?: string;
    tagVariant?: TagVariant;
  }

// eslint-disable-next-line valid-jsdoc
/**
 * This function wraps the two types of links we have. Internal links and
 * external links. Internal links should use the Gatsby <Link> component.
 * Eternal links that will open in a new tab will use the Trussworks
 * <Link> component and external links that stay on the page will use the
 * standard <a> tag. This function allows the instance to choose the type of link
 * along with the props necessary to set new tabs, classes.
 *
 * Note - if the link is an external link and will not open in a new
 * browser tab, ensure that hitting the back button works. This has shown to
 * have errors on edge cases (ie, launching the gmail client with mailto links)
 * and it is the recommendation to not have external links open in the same tab.
 *
 * @param props
 * @returns
 */
const LinkTypeWrapper = (props:ILinkTypeWrapper) => {
  const intl = useIntl();
  const {url} = props;
  const formattedUrl = url && typeof url !== 'string' ? intl.formatMessage(url) : url;

  const link = props.internal ? (
    <Link
      to={`${formattedUrl}`}
      className={props.className ? `usa-link ${props.className}` : `usa-link`}
    >
      {props.linkText}
    </Link>
  ) : (
    props.openUrlNewTab ? (
      <TrussLink
        variant={'external'}
        className={props.className}
        href={`${formattedUrl}`}
        target="_blank"
        rel="noreferrer"
        data-cy={props.dataCy ? props.dataCy : ''}
      >
        {props.linkText}
      </TrussLink>
    ) : (
      <a
        className={props.className}
        href={formattedUrl}
        data-cy={props.dataCy ? props.dataCy : ''}
      >
        {props.linkText}
      </a>
    )
  );

  const tag = props.tag ? (
    <Tag className={[styles.tag, styles[props.tagVariant || 'accent']].join(' ')}>
      {props.tag}
    </Tag>
  ) : null;

  return (
    <>
      {link}
      {props.tag && '\u2003'}
      {tag}
    </>
  );
};

export default LinkTypeWrapper;
