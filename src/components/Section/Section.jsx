import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Section = ({ nameForClass, children }) => (
  <section className={[`${nameForClass}`]}>
    <Container>{children}</Container>
  </section>
);

export default Section;

Section.propTypes = {
  nameForClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
