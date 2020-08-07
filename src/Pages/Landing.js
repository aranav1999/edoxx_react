import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import illustration from '../images/coding.svg';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PricingTable from '../Components/PricingTable/PricingTable';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Modal,
  Form,
} from 'reactstrap';

// core components
import Header from '../Components/Navbar/Navbar';

const items = [
  {
    src: require('../images/markz.png'),
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: require('../images/billg.png'),
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: require('../images/pichai.png'),
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: require('../images/musk.png'),
    altText: '',
    caption: '',
    header: '',
  },
];

class Landing extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    return (
      <>
        <Header />
        <main ref='main'>
          <div className='position-relative'>
            {/* shape Hero */}
            <section className='section section-lg section-shaped pb-250'>
              <div className='shape shape-style-1 shape-dark'>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container
                style={{ marginTop: '3rem', marginBottom: '-80px' }}
                className='py-lg-md d-flex'
              >
                <div className='col px-0'>
                  <Row>
                    <Col lg='6'>
                      <h1 className='display-3 text-white'>
                        Sign Up Now To Get<span>first month FREE</span>
                      </h1>
                      <p className='lead text-white'>
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className='btn-wrapper'>
                        <Button
                          className=' btn-icon'
                          color='success'
                          type='button'
                          onClick={() => this.toggleModal('formModal')}
                        >
                          Book your Demo
                        </Button>
                        <Modal
                          className='modal-dialog-centered'
                          size='sm'
                          isOpen={this.state.formModal}
                          toggle={() => this.toggleModal('formModal')}
                        >
                          <div className='modal-body p-0'>
                            <Card className='bg-secondary shadow border-0'>
                              <CardBody className='px-lg-5 py-lg-5'>
                                <div className='text-center text-muted mb-4'>
                                  <small>Enter Your Credentials</small>
                                </div>
                                <Form role='form'>
                                  <FormGroup
                                    className={classnames('mb-3', {
                                      focused: this.state.snameFocused,
                                    })}
                                  >
                                    <InputGroup className='input-group-alternative'>
                                      <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                          <i className='fa fa-user' />
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder='Student Name'
                                        type='text'
                                        onFocus={(e) =>
                                          this.setState({ snameFocused: true })
                                        }
                                        onBlur={(e) =>
                                          this.setState({ snameFocused: false })
                                        }
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup
                                    className={classnames('mb-3', {
                                      focused: this.state.nameFocused,
                                    })}
                                  >
                                    <InputGroup className='input-group-alternative'>
                                      <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                          <i className='fa fa-user' />
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder='Parent Name'
                                        type='text'
                                        onFocus={(e) =>
                                          this.setState({ nameFocused: true })
                                        }
                                        onBlur={(e) =>
                                          this.setState({ nameFocused: false })
                                        }
                                      />
                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup
                                    className={classnames('mb-3', {
                                      focused: this.state.emailFocused,
                                    })}
                                  >
                                    <InputGroup className='input-group-alternative'>
                                      <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                          <i className='ni ni-email-83' />
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        placeholder='Parent Email'
                                        type='email'
                                        onFocus={(e) =>
                                          this.setState({ emailFocused: true })
                                        }
                                        onBlur={(e) =>
                                          this.setState({ emailFocused: false })
                                        }
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup className={classnames('mb-3')}>
                                    <InputGroup className='input-group-alternative'>
                                      <PhoneInput
                                        placeholder='Enter Phone Number'
                                        defaultCountry='IN'
                                        value={this.state.phone}
                                        onChange={(phone) =>
                                          this.setState({ phone })
                                        }
                                      />
                                    </InputGroup>
                                  </FormGroup>

                                  <div className='custom-control custom-control-alternative custom-checkbox'>
                                    <input
                                      className='custom-control-input'
                                      id=' customCheckLogin'
                                      type='checkbox'
                                    />
                                    <label
                                      className='custom-control-label'
                                      htmlFor=' customCheckLogin'
                                    >
                                      <span className='text-muted'>
                                        Remember me
                                      </span>
                                    </label>
                                  </div>
                                  <div className='text-center'>
                                    <Button
                                      className='my-4'
                                      color='primary'
                                      type='button'
                                    >
                                      Book
                                    </Button>
                                  </div>
                                </Form>
                              </CardBody>
                            </Card>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                    <Col lg='6'>
                      <div>
                        <img
                          className='img-fluid floating'
                          src={illustration}
                          alt='...'
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className='separator separator-bottom separator-skew'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='none'
                  version='1.1'
                  viewBox='0 0 2560 100'
                  x='0'
                  y='0'
                >
                  <polygon
                    className='fill-white'
                    points='2560 0 2560 100 0 100'
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className='section section-lg'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='mb-lg-auto' md='7'>
                  <div className='rounded shadow-lg overflow-hidden transform-perspective-left'>
                    <UncontrolledCarousel items={items} />
                  </div>
                </Col>
                <Col className='order-md-2' md='5'>
                  <h2 className='text-warning font-weight-bold'>
                    Why Coding Is Important For Young Minds
                  </h2>
                  <img
                    alt='...'
                    className='img-fluid floating'
                    src={require('../images/child.gif')}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section bg-secondary'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col md='6'>
                  <Card className='bg-default shadow border-0'>
                    <CardImg
                      alt='...'
                      src={require('../images/mentoring-jpg.jpg')}
                      top
                    />
                    <blockquote className='card-blockquote'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='svg-bg'
                        preserveAspectRatio='none'
                        viewBox='0 0 583 95'
                      >
                        <polygon
                          className='fill-default'
                          points='0,52 583,95 0,95'
                        />
                        <polygon
                          className='fill-default'
                          opacity='.2'
                          points='0,42 583,95 683,0 0,95'
                        />
                      </svg>
                      <h4 className='display-3 font-weight-bold text-white'>
                        Mentoring Programme
                      </h4>
                      <p className='lead text-italic text-white'>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md='6'>
                  <div className='pl-md-5'>
                    <div className='icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5'>
                      <i className='ni ni-settings' />
                    </div>
                    <h3>Our customers</h3>
                    <p className='lead'>
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className='font-weight-bold text-warning mt-5'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className='section section-lg bg-gradient-warning'>
            <Container>
              <PricingTable />
            </Container>
          </section>

          <section className='mt-6 section pb-0 bg-gradient-primary'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-lg-1 ml-lg-auto' md='6'>
                  <div className='position-relative pr-md-5'>
                    <img
                      alt='...'
                      className='img-center img-fluid'
                      src={require('../images/man.png')}
                    />
                  </div>
                </Col>
                <Col className='order-lg-2' lg='6'>
                  <div className='d-flex'>
                    <div>
                      <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                        <i className='ni ni-building text-primary' />
                      </div>
                    </div>
                    <div className='pl-4'>
                      <h4 className='display-3 text-white'>Modern Interface</h4>
                      <p className='text-white'>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className='shadow shadow-lg--hover mt-5'>
                    <CardBody>
                      <div className='d-flex px-3'>
                        <div>
                          <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                            <i className='ni ni-satisfied' />
                          </div>
                        </div>
                        <div className='pl-4'>
                          <h5 className='title text-success'>
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className='text-success'
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='shadow shadow-lg--hover mt-5'>
                    <CardBody>
                      <div className='d-flex px-3'>
                        <div>
                          <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
                            <i className='ni ni-active-40' />
                          </div>
                        </div>
                        <div className='pl-4'>
                          <h5 className='title text-warning'>
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className='text-warning'
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>

          <section className='section section-lg'>
            <Container>
              <Row className='justify-content-center text-center mb-lg'>
                <Col lg='8'>
                  <h2 className='display-3'>The amazing Team</h2>
                  <p className='lead text-muted'>
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className='mb-5 mb-lg-0' lg='4' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='card-lift--hover rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('../images/bhuwan.jpg')}
                      style={{ width: '200px' }}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Bhuwan Tyagi</span>
                        <small className='h6 text-muted'>Web Developer</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='warning'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='warning'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='warning'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='mb-5 mb-lg-0' lg='4' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='card-lift--hover rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('../images/yash.jpeg')}
                      style={{ width: '200px' }}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Yash Pasari</span>
                        <small className='h6 text-muted'>Product Manager</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='primary'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='primary'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='primary'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='mb-5 mb-lg-0' lg='4' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='card-lift--hover rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('../images/aranav.jfif')}
                      style={{ width: '200px' }}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Aranav Jindal</span>
                        <small className='h6 text-muted'>UI/UX Designer</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='info'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='info'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='info'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section section-lg pt-0'>
            <Container>
              <Card className='bg-gradient-warning shadow-lg border-0'>
                <div className='p-5'>
                  <Row className='align-items-center'>
                    <Col lg='8'>
                      <h3 className='text-white'>
                        We made website building easier for you.
                      </h3>
                      <p className='lead text-white mt-3'>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className='ml-lg-auto' lg='3'>
                      <Button
                        block
                        className='btn-white'
                        color='default'
                        href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page'
                        size='lg'
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className='section section-lg bg-gradient-default'>
            <Container className='pt-lg pb-300'>
              <Row className='text-center justify-content-center'>
                <Col lg='10'>
                  <h2 className='display-3 text-white'>Build something</h2>
                  <p className='lead text-white'>
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className='row-grid mt-5'>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-settings text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Building tools</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-ruler-pencil text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Grow your market</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-atom text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Launch time</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          <section className='section section-lg pt-lg-0 section-contact-us'>
            <Container>
              <Row className='justify-content-center mt--300'>
                <Col lg='8'>
                  <Card className='bg-gradient-secondary shadow'>
                    <CardBody className='p-lg-5'>
                      <h4 className='mb-1'>Want to work with us?</h4>
                      <p className='mt-0'>
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames('mt-5', {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-user-run' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Your name'
                            type='text'
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-email-83' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Email address'
                            type='email'
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className='mb-4'>
                        <Input
                          className='form-control-alternative'
                          cols='80'
                          name='name'
                          placeholder='Type a message...'
                          rows='4'
                          type='textarea'
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className='btn-round'
                          color='default'
                          size='lg'
                          type='button'
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
