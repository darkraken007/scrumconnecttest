import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="md-footer-main font-small pt-4 mt-4">
      <MDBContainer fluid className="md-footer-ora text-center text-md-left">
        <MDBRow>
          <MDBCol className="icon-col-footer" md="1">
          </MDBCol>
          <MDBCol className="link-col" md="9">
            <ul className="link-content">
              {/* <li className="list-unstyled">
                <a href="#!">OrchViewer</a>
              </li> */}
            </ul>
          </MDBCol>
          <MDBCol className="link-col" md="2">
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center contact   py-3 md-footer-ora">
        <MDBContainer className="md-footer-ora" fluid>
          &copy; {new Date().getFullYear()}: UK Government | Terms Of Use and Privacy | Confidential
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;