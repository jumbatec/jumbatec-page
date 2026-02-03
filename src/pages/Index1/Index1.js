import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Services from '../../components/Services/services';
import WebsiteDescription from '../../components/Website Description/website-description';
import AboutUs from '../../components/About Us/about-us';
import Platforms from '../../components/Platforms/platforms';
import VideoTestimonials from '../../components/Testimonials/video-testimonials';
import OurClients from '../../components/Clients/our-clients';
import GetStarted from '../../components/Get Started/get-started';
import Blog from '../../components/Blog/blog';
import ContactUs from '../../components/Contact Us/contact-us';
import Footer from '../../components/Footer/footer';
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp';

class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "navbar-white"
        };
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navClass={this.state.navClass} />

                {/* Importing Section */}
                <Section />

                {/* Importing Platforms */}
                <Platforms />

                {/* Importing Services */}
                <Services />

                {/* Importing Website Description */}
                <WebsiteDescription />

                {/* Importing About Us */}
                <AboutUs />

                {/* Importing Video Testimonials */}
                <VideoTestimonials />

                {/* Importing Our Clients */}
                <OurClients />

                {/* Importing Pricing */}
                {/* <Pricing /> */}

                {/* Importing Testimonials
                <Testimonials /> */}

                {/* Importing Get Started */}
                <GetStarted />

                {/* Importing Blog */}
                <Blog />

                {/* Importing Contact Us */}
                <ContactUs />

                {/* Importing Get Footer */}
                <Footer />

                {/* Floating WhatsApp Button */}
                <FloatingWhatsApp />

            </React.Fragment>
        );
    }
}

export default Index1;