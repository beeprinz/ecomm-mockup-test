import React, { Component } from "react";
import Modal1 from './components/modal1';
import Modal2 from './components/modal2';
import Modal3 from './components/modal3';
import Modal4 from './components/modal4';
import Main from './components/main';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open1: false,
      open2: false,
      open3: false,
      open4: false
    };
    this.handleToggleOpenModal1 = this.handleToggleOpenModal1.bind(this);
    this.handleToggleOpenModal2 = this.handleToggleOpenModal2.bind(this);
    this.handleToggleOpenModal3 = this.handleToggleOpenModal3.bind(this);
    this.handleToggleOpenModal4 = this.handleToggleOpenModal4.bind(this);
  }


handleToggleOpenModal1(){
    this.setState({
      open1: !this.state.open1,
    });
  }

handleToggleOpenModal2(){
    this.setState({
      open2: !this.state.open2,
    });
  }

handleToggleOpenModal3() {
    this.setState({
      open3: !this.state.open3,
    });
  }

handleToggleOpenModal4(){
    this.setState({
      open4: !this.state.open4,
    });
  }

  render() {
    if(this.state.open1 === true){
      return <div>
      <div>
              <img src="/images/banner.jpg" className="img-fluid" alt="Responsive image" />
            </div>
    
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-8">
                  <h3>In Gravida Libero</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer enim neque, molestie ut placerat id, tincidunt in
                    sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
                    ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit
                    nulla. Sed nec ex commodo, tincidunt felis ac, iaculis
                    ipsum.
                  </p>
                  <p>
                    Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
                    felis ac, iaculis ipsum
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>State Finder</h5>
                      <p>Another line of filler text</p>
                    </div>
    
                    <div className="container mb-2">
                      <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary ml-2 mr-2" type="button">
                            img
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-5">In Gravida</h3>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Cras ac mauris</p>
                          <p className="small">
                            nteger dictum hendrerit pharetra. Cras fermentum
                            posuere egestas.
                          </p>
                          <button type="button" className="btn btn-light mb-0">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Curabitur elementum</p>
                          <p className="small">
                            Cras vel imperdiet mauris. Pellentesque libero
                            mauris, interdum a felis et, condimentum mattis
                            erat.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Awards and Recognitions</p>
                          <p className="small">
                            Aliquam eget ligula mauris. Etiam viverra non turpis
                            eu auctor. Nullam pretium est libero, et condimentum
                            massa egestas id.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Morbi placerat</p>
                          <p className="small">
                            Nam feugiat ultrices ligula eget faucibus. Mauris
                            convallis ipsum est.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Suspendisse eu</p>
                          <p className="small">
                            Duis pretium elementum dui, id feugiat neque
                            facilisis vel.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Integer faucibus</p>
                          <p className="small">
                            Vivamus at rutrum est, eu pellentesque lacus.
                            Curabitur imperdiet tortor sit amet enim
                            ullamcorper, a aliquet odio rutrum.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="mb-5">Products</h3>
                        </div>
                      
                        <div className="col-md-4">
                          <p className="text-left">Filter by</p>
                          <div className="input-group float-right mb-4">
                            <select className="custom-select" id="inputGroupSelect04">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 1</h5>
                              <p className="card-text small">
                                Starting at $500
                              </p>
                              <p className="card-text small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <img className="card-img-top mb-2" src="/images/cereal_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal1}>
                                
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 2</h5>
                              <p className="card-text small">
                                Starting at $1900
                              </p>
                              <p className="card-text small">
                                Donec ornare magna sit amet erat molestie
                                sollicitudin ac vitae lectus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/flower_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal2}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 3</h5>
                              <p className="card-text small">
                                Starting at $2730
                              </p>
                              <p className="card-text small">
                                Cras non metus sed odio tristique imperdiet.
                              </p>
                              <img className="card-img-top mb-2" src="/images/machine_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal3}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 4</h5>
                              <p className="card-text small">
                                Starting at $731
                              </p>
                              <p className="card-text small">
                                Pellentesque mattis tellus ut molestie dapibus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/candy_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal4}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <Modal1 />
        
      </div>;
    }

    else if(this.state.open2 === true){
      return <div>
      <div>
              <img src="/images/banner.jpg" className="img-fluid" alt="Responsive image" />
            </div>
    
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-8">
                  <h3>In Gravida Libero</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer enim neque, molestie ut placerat id, tincidunt in
                    sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
                    ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit
                    nulla. Sed nec ex commodo, tincidunt felis ac, iaculis
                    ipsum.
                  </p>
                  <p>
                    Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
                    felis ac, iaculis ipsum
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>State Finder</h5>
                      <p>Another line of filler text</p>
                    </div>
    
                    <div className="container mb-2">
                      <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary ml-2 mr-2" type="button">
                            img
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-5">In Gravida</h3>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Cras ac mauris</p>
                          <p className="small">
                            nteger dictum hendrerit pharetra. Cras fermentum
                            posuere egestas.
                          </p>
                          <button type="button" className="btn btn-light mb-0">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Curabitur elementum</p>
                          <p className="small">
                            Cras vel imperdiet mauris. Pellentesque libero
                            mauris, interdum a felis et, condimentum mattis
                            erat.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Awards and Recognitions</p>
                          <p className="small">
                            Aliquam eget ligula mauris. Etiam viverra non turpis
                            eu auctor. Nullam pretium est libero, et condimentum
                            massa egestas id.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Morbi placerat</p>
                          <p className="small">
                            Nam feugiat ultrices ligula eget faucibus. Mauris
                            convallis ipsum est.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Suspendisse eu</p>
                          <p className="small">
                            Duis pretium elementum dui, id feugiat neque
                            facilisis vel.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Integer faucibus</p>
                          <p className="small">
                            Vivamus at rutrum est, eu pellentesque lacus.
                            Curabitur imperdiet tortor sit amet enim
                            ullamcorper, a aliquet odio rutrum.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="mb-5">Products</h3>
                        </div>
                      
                        <div className="col-md-4">
                          <p className="text-left">Filter by</p>
                          <div className="input-group float-right mb-4">
                            <select className="custom-select" id="inputGroupSelect04">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 1</h5>
                              <p className="card-text small">
                                Starting at $500
                              </p>
                              <p className="card-text small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <img className="card-img-top mb-2" src="/images/cereal_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal1}>
                                
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 2</h5>
                              <p className="card-text small">
                                Starting at $1900
                              </p>
                              <p className="card-text small">
                                Donec ornare magna sit amet erat molestie
                                sollicitudin ac vitae lectus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/flower_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal2}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 3</h5>
                              <p className="card-text small">
                                Starting at $2730
                              </p>
                              <p className="card-text small">
                                Cras non metus sed odio tristique imperdiet.
                              </p>
                              <img className="card-img-top mb-2" src="/images/machine_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal3}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 4</h5>
                              <p className="card-text small">
                                Starting at $731
                              </p>
                              <p className="card-text small">
                                Pellentesque mattis tellus ut molestie dapibus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/candy_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal4}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <Modal2 /> 
      </div>;
    } 

    else if(this.state.open3 === true){
      return <div>
      <div>
              <img src="/images/banner.jpg" className="img-fluid" alt="Responsive image" />
            </div>
    
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-8">
                  <h3>In Gravida Libero</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer enim neque, molestie ut placerat id, tincidunt in
                    sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
                    ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit
                    nulla. Sed nec ex commodo, tincidunt felis ac, iaculis
                    ipsum.
                  </p>
                  <p>
                    Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
                    felis ac, iaculis ipsum
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>State Finder</h5>
                      <p>Another line of filler text</p>
                    </div>
    
                    <div className="container mb-2">
                      <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary ml-2 mr-2" type="button">
                            img
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-5">In Gravida</h3>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Cras ac mauris</p>
                          <p className="small">
                            nteger dictum hendrerit pharetra. Cras fermentum
                            posuere egestas.
                          </p>
                          <button type="button" className="btn btn-light mb-0">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Curabitur elementum</p>
                          <p className="small">
                            Cras vel imperdiet mauris. Pellentesque libero
                            mauris, interdum a felis et, condimentum mattis
                            erat.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Awards and Recognitions</p>
                          <p className="small">
                            Aliquam eget ligula mauris. Etiam viverra non turpis
                            eu auctor. Nullam pretium est libero, et condimentum
                            massa egestas id.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Morbi placerat</p>
                          <p className="small">
                            Nam feugiat ultrices ligula eget faucibus. Mauris
                            convallis ipsum est.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Suspendisse eu</p>
                          <p className="small">
                            Duis pretium elementum dui, id feugiat neque
                            facilisis vel.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Integer faucibus</p>
                          <p className="small">
                            Vivamus at rutrum est, eu pellentesque lacus.
                            Curabitur imperdiet tortor sit amet enim
                            ullamcorper, a aliquet odio rutrum.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="mb-5">Products</h3>
                        </div>
                      
                        <div className="col-md-4">
                          <p className="text-left">Filter by</p>
                          <div className="input-group float-right mb-4">
                            <select className="custom-select" id="inputGroupSelect04">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 1</h5>
                              <p className="card-text small">
                                Starting at $500
                              </p>
                              <p className="card-text small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <img className="card-img-top mb-2" src="/images/cereal_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal1}>
                                
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 2</h5>
                              <p className="card-text small">
                                Starting at $1900
                              </p>
                              <p className="card-text small">
                                Donec ornare magna sit amet erat molestie
                                sollicitudin ac vitae lectus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/flower_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal2}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 3</h5>
                              <p className="card-text small">
                                Starting at $2730
                              </p>
                              <p className="card-text small">
                                Cras non metus sed odio tristique imperdiet.
                              </p>
                              <img className="card-img-top mb-2" src="/images/machine_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal3}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 4</h5>
                              <p className="card-text small">
                                Starting at $731
                              </p>
                              <p className="card-text small">
                                Pellentesque mattis tellus ut molestie dapibus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/candy_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal4}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <Modal3 /> 
      </div>;
    } else if(this.state.open4 === true){
      return <div>
      <div>
              <img src="/images/banner.jpg" className="img-fluid" alt="Responsive image" />
            </div>
    
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-8">
                  <h3>In Gravida Libero</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer enim neque, molestie ut placerat id, tincidunt in
                    sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
                    ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit
                    nulla. Sed nec ex commodo, tincidunt felis ac, iaculis
                    ipsum.
                  </p>
                  <p>
                    Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
                    felis ac, iaculis ipsum
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>State Finder</h5>
                      <p>Another line of filler text</p>
                    </div>
    
                    <div className="container mb-2">
                      <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary ml-2 mr-2" type="button">
                            img
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-5">In Gravida</h3>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Cras ac mauris</p>
                          <p className="small">
                            nteger dictum hendrerit pharetra. Cras fermentum
                            posuere egestas.
                          </p>
                          <button type="button" className="btn btn-light mb-0">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Curabitur elementum</p>
                          <p className="small">
                            Cras vel imperdiet mauris. Pellentesque libero
                            mauris, interdum a felis et, condimentum mattis
                            erat.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Awards and Recognitions</p>
                          <p className="small">
                            Aliquam eget ligula mauris. Etiam viverra non turpis
                            eu auctor. Nullam pretium est libero, et condimentum
                            massa egestas id.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Morbi placerat</p>
                          <p className="small">
                            Nam feugiat ultrices ligula eget faucibus. Mauris
                            convallis ipsum est.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Suspendisse eu</p>
                          <p className="small">
                            Duis pretium elementum dui, id feugiat neque
                            facilisis vel.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Integer faucibus</p>
                          <p className="small">
                            Vivamus at rutrum est, eu pellentesque lacus.
                            Curabitur imperdiet tortor sit amet enim
                            ullamcorper, a aliquet odio rutrum.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="mb-5">Products</h3>
                        </div>
                      
                        <div className="col-md-4">
                          <p className="text-left">Filter by</p>
                          <div className="input-group float-right mb-4">
                            <select className="custom-select" id="inputGroupSelect04">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 1</h5>
                              <p className="card-text small">
                                Starting at $500
                              </p>
                              <p className="card-text small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <img className="card-img-top mb-2" src="/images/cereal_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal1}>
                                
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 2</h5>
                              <p className="card-text small">
                                Starting at $1900
                              </p>
                              <p className="card-text small">
                                Donec ornare magna sit amet erat molestie
                                sollicitudin ac vitae lectus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/flower_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal2}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 3</h5>
                              <p className="card-text small">
                                Starting at $2730
                              </p>
                              <p className="card-text small">
                                Cras non metus sed odio tristique imperdiet.
                              </p>
                              <img className="card-img-top mb-2" src="/images/machine_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal3}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 4</h5>
                              <p className="card-text small">
                                Starting at $731
                              </p>
                              <p className="card-text small">
                                Pellentesque mattis tellus ut molestie dapibus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/candy_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal4}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <Modal4 /> 
      </div>;
    }
    
    return(
    <div>
    <div>
              <img src="/images/banner.jpg" className="img-fluid" alt="Responsive image" />
            </div>
    
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-8">
                  <h3>In Gravida Libero</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer enim neque, molestie ut placerat id, tincidunt in
                    sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
                    ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit
                    nulla. Sed nec ex commodo, tincidunt felis ac, iaculis
                    ipsum.
                  </p>
                  <p>
                    Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt
                    felis ac, iaculis ipsum
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>State Finder</h5>
                      <p>Another line of filler text</p>
                    </div>
    
                    <div className="container mb-2">
                      <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary ml-2 mr-2" type="button">
                            img
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-5">In Gravida</h3>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Cras ac mauris</p>
                          <p className="small">
                            nteger dictum hendrerit pharetra. Cras fermentum
                            posuere egestas.
                          </p>
                          <button type="button" className="btn btn-light mb-0">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Curabitur elementum</p>
                          <p className="small">
                            Cras vel imperdiet mauris. Pellentesque libero
                            mauris, interdum a felis et, condimentum mattis
                            erat.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Awards and Recognitions</p>
                          <p className="small">
                            Aliquam eget ligula mauris. Etiam viverra non turpis
                            eu auctor. Nullam pretium est libero, et condimentum
                            massa egestas id.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p>Morbi placerat</p>
                          <p className="small">
                            Nam feugiat ultrices ligula eget faucibus. Mauris
                            convallis ipsum est.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Suspendisse eu</p>
                          <p className="small">
                            Duis pretium elementum dui, id feugiat neque
                            facilisis vel.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
    
                        <div className="col-md-4 mb-4">
                          <p>Integer faucibus</p>
                          <p className="small">
                            Vivamus at rutrum est, eu pellentesque lacus.
                            Curabitur imperdiet tortor sit amet enim
                            ullamcorper, a aliquet odio rutrum.
                          </p>
                          <button type="button" className="btn btn-light">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-2">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <h3 className="mb-5">Products</h3>
                        </div>
                      
                        <div className="col-md-4">
                          <p className="text-left">Filter by</p>
                          <div className="input-group float-right mb-4">
                            <select className="custom-select" id="inputGroupSelect04">
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 1</h5>
                              <p className="card-text small">
                                Starting at $500
                              </p>
                              <p className="card-text small">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <img className="card-img-top mb-2" src="/images/cereal_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal1}>
                                
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 2</h5>
                              <p className="card-text small">
                                Starting at $1900
                              </p>
                              <p className="card-text small">
                                Donec ornare magna sit amet erat molestie
                                sollicitudin ac vitae lectus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/flower_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal2}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 3</h5>
                              <p className="card-text small">
                                Starting at $2730
                              </p>
                              <p className="card-text small">
                                Cras non metus sed odio tristique imperdiet.
                              </p>
                              <img className="card-img-top mb-2" src="/images/machine_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal3}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-3 mb-2">
                          <div className="card h-100">
                            <div className="card-body">
                              <h5 className="card-title">Product Title 4</h5>
                              <p className="card-text small">
                                Starting at $731
                              </p>
                              <p className="card-text small">
                                Pellentesque mattis tellus ut molestie dapibus.
                              </p>
                              <img className="card-img-top mb-2" src="/images/candy_b.jpg" alt="Card image cap" />
                              <a onClick={this.handleToggleOpenModal4}>
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    )
  }
}

export default App;
