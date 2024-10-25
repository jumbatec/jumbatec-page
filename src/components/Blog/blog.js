import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Blog Box
import BlogBox from "./blog-box";
import { withTranslation } from "react-i18next";

class Blog extends Component {
  state = {
  };
  render() {

    const { t } = this.props;

    const blogs = [
      {
        id: 1,
        image: "assets/images/blog/img-1.jpg",
        topic: t('blog_software_development'),
        title: t('blog_software_development'),
        description: t('blog_software_development_desc'),
        link: "",
      },
      {
        id: 2,
        image: "assets/images/blog/img-2.jpg",
        topic: t('blog_digital_marketing'),
        title: t('blog_digital_marketing'),
        description: t('blog_digital_marketing_desc'),
        link: "",
      },
      {
        id: 3,
        image: "assets/images/blog/img-3.jpg",
        topic: t('blog_ai_impact'),
        title: t('blog_ai_impact'),
        description: t('blog_ai_impact_desc'),
        link: "",
      },
    ];
  
    return (
      <React.Fragment>
        <section className="section bg-light active" id="blog">
        <Container>
          {/* Render section title */}
          <SectionTitle
            title={t('blog_title')}
            description={t('blog_description')}
          />

          <Row className="mt-4">
            {/* Render blog boxes */}
            {blogs.map((blog, key) => (
              <BlogBox key={key} blog={blog} />
            ))}
          </Row>
        </Container>
      </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Blog);
