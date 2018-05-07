import React, { Component} from 'react';


class Modal3 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          visible: true
      };
      this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility(){
        this.setState({visible: false})
    }

    render(){
        if(this.state.visible === true){

        
        return <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>Product Title 3</h3>
                        <h4 className="font-italic">
                          Starting at $1900
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse vitae augue
                          faucibus, placerat dui et, rutrum neque. Ut
                          maximus augue a diam efficitur, quis mollis
                          risus mollis. Morbi nisl nisl, blandit et
                          nulla a, aliquet posuere nunc. Donec pulvinar
                          lacus a augue consequat pretium sit amet vitae
                          ex. Sed eu neque non elit gravida consectetur
                          non quis enim. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Quisque pretium
                          tortor ac nulla suscipit, ac malesuada massa
                          semper. Nunc malesuada lacinia feugiat.
                          Interdum et malesuada fames ac ante ipsum
                          primis in faucibus.
                        </p>
                        <p>
                          Curabitur luctus in justo quis facilisis.
                          Integer fringilla augue ut venenatis lobortis.
                          Nullam vitae tincidunt velit. Suspendisse
                          fermentum, quam a euismod pulvinar, enim risus
                          ultrices turpis, vel vulputate magna urna ut
                          nunc. Cras imperdiet elit ac risus tincidunt,
                          at molestie arcu suscipit. Fusce eget bibendum
                          nisl. Quisque ultrices elementum velit eu
                          bibendum.
                        </p>
                        <button type="button" className="btn btn-primary">
                          Buy Online
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button type="button" className="close mb-2" onClick={this.handleVisibility} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <img src="/images/machine_b.jpg" className="img-fluid" alt="Responsive image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
        } return(
            null
        )
    }

  
}
export default Modal3;  