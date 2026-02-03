import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { withTranslation } from "react-i18next";
import "./video-testimonials.css";

class VideoTestimonials extends Component {
  render() {
    const { t } = this.props;

    const videos = [
      {
        id: 1,
        title: t("videoTestimonials.video1Title"),
        youtubeId: "1zQorUw0sbU",
        description: t("videoTestimonials.video1Description"),
      },
      {
        id: 2,
        title: t("videoTestimonials.video2Title"),
        youtubeId: "doDhzBdAvCA",
        description: t("videoTestimonials.video2Description"),
      },
    ];

    return (
      <React.Fragment>
        <section className="section video-testimonials-section" id="testimonials">
          <Container>
            {/* Section Title */}
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="testimonials-title text-center mb-5">
                  <h2 className="font-weight-bold mb-3">
                    {t("videoTestimonials.title")}
                  </h2>
                  <p className="text-muted">
                    {t("videoTestimonials.description")}
                  </p>
                  <div className="title-border mx-auto mt-4"></div>
                </div>
              </Col>
            </Row>

            {/* Videos Grid */}
            <Row className="mt-5">
              {videos.map((video) => (
                <Col lg={6} md={12} key={video.id} className="mb-4">
                  <div className="video-card">
                    <div className="video-wrapper">
                      <div className="video-container">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="video-iframe"
                        ></iframe>
                      </div>
                    </div>
                    <div className="video-content">
                      <h4 className="video-title">{video.title}</h4>
                      <p className="video-description text-muted">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Call to Action */}
            <Row className="mt-5">
              <Col lg={12} className="text-center">
                <div className="testimonials-cta">
                  <p className="text-muted mb-4">
                    {t("videoTestimonials.ctaText")}
                  </p>
                  <a href="https://wa.me/258855898000" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                    {t("videoTestimonials.ctaButton")}
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(VideoTestimonials);
