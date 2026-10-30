import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const videos = [
    { key: 1, youtubeId: "1zQorUw0sbU" },
    { key: 2, youtubeId: "doDhzBdAvCA" },
];

const VideoTestimonials = () => {
    const { t } = useTranslation();
    return (
        <section className="video-testimonial-section section-padding fix">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto mb-60">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                        {t('videoTestimonials.subtitle')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('videoTestimonials.title')}</h2>
                    <p className="text wow fadeInUp" data-wow-delay=".6s">{t('videoTestimonials.description')}</p>
                </div>
                <div className="row gy-5">
                    {videos.map((video) => (
                        <div className="col-lg-6" key={video.key}>
                            <div className="video-testimonial-card">
                                <div className="video-testimonial-frame">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={t(`videoTestimonials.video${video.key}Title`)}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="video-testimonial-body">
                                    <h5>{t(`videoTestimonials.video${video.key}Title`)}</h5>
                                    <p>{t(`videoTestimonials.video${video.key}Description`)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-60">
                    <p className="mb-20">{t('videoTestimonials.ctaText')}</p>
                    <Link className="theme-btn rounded-5" to="/contact#contact-form-section">
                        {t('videoTestimonials.ctaButton')}
                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
