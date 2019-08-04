import React from 'react';

import { Breadcrumb } from "react-bootstrap";

const ContactUs = () => {
    return (
      <div>
        
        <div className="mission">FFT Mission Statement</div>
        breadcrumb on every page except home
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        
      </div>
    );
}
export default ContactUs;