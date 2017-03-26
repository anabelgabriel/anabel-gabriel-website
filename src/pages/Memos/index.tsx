import * as React from 'react';
import { Paragraph, Layout, LayoutContent } from '../../components';
import { i18n } from '../../utils';
import { inject, observer } from 'mobx-react';
import { Blog } from "../../stores";
import Memo from './Memo';

interface Props {
  lang: any;
  blog: Blog;
}

class Memos extends React.PureComponent<Props, void> {
  public render() {
    const { lang, blog } = this.props;
    return (
      <Layout>
        <LayoutContent>
          {blog.size ? this.renderBlog() : (
            <Paragraph align="center">
              {lang.no_posts}
            </Paragraph>
          )}
        </LayoutContent>
      </Layout>
    );
  }

  private renderBlog() {
    const { blog } = this.props;
    const children = [];
    blog.forEach((entry, index) => {
      children.push(<Memo key={index} entry={entry}/>);
    })
    return children;
  }
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(inject('blog')(observer(Memos)));
