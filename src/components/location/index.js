import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe title="google-map-link"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9023.188296221118!2d12.97358423433296!3d55.570731802958576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86005c9dd8d8d3c!2sMalm%C3%B6+Arena!5e0!3m2!1sen!2sse!4v1556614450380!5m2!1sen!2sse" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
