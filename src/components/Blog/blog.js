import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Blog Box
import BlogBox from "./blog-box";

class Blog extends Component {
  state = {
    blogs: [
      {
        id: 1,
        image: "assets/images/blog/img-1.jpg",
        topic: "Desenvolvimento de Software",
        title: "Tendências em Desenvolvimento de Software",
        description:
          "Explore as últimas tendências e práticas no desenvolvimento de software personalizado e como elas podem beneficiar o seu negócio.",
        link: "",
      },
      {
        id: 2,
        image: "assets/images/blog/img-2.jpg",
        topic: "Marketing Digital",
        title: "Estratégias Eficazes de Marketing Digital",
        description:
          "Descubra estratégias eficazes de marketing digital para aumentar a visibilidade e o engajamento da sua marca online.",
        link: "",
      },
      {
        id: 3,
        image: "assets/images/blog/img-3.jpg",
        topic: "Inteligência Artificial",
        title: "Impacto da IA nos Negócios",
        description:
          "Entenda como a inteligência artificial está transformando os negócios e como a sua empresa pode se beneficiar dessas inovações.",
        link: "",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light active" id="blog">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Últimas Notícias"
              description="Fique atualizado com as novidades e tendências em soluções tecnológicas que a JUMBATEC oferece para transformar o seu negócio."
            />

            <Row className="mt-4">
              {/* Render blog boxes */}
              {this.state.blogs.map((blog, key) => (
                <BlogBox key={key} blog={blog} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
