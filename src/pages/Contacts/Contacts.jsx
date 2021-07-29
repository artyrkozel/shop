import React from "react";
import GoogleMapReact from 'google-map-react';

const Contacts = () => {
    const defaultProps = {
        center: {
            lat: 53.902224,
            lng: 27.550448
        },
        zoom: 15
    };
    return (
        <div className="contacts">
                <div className="contacts__inner">
                    <div className="contacts__form">
                        <div className="contacts__title">get in touch with us to know how we can help</div>
                        <form className="form">
                            <div className="form__field">
                                <input className="input form__field-item" type="text" placeholder="name"/>
                            </div>
                            <div className="form__field">
                                <input className="input form__field-item" type="text" placeholder="email"/>
                            </div>
                            <div className="form__field">
                                <input className="input form__field-item" type="text" placeholder="company"/>
                            </div>
                            <div className="form__field">
                                <textarea className="input textarea" cols="20" rows="10" placeholder="Write a few words"/>
                            </div>
                            <button className="btn form__button" type="submit">Send</button>
                        </form>
                        <div className="contacts__phone">Or call us at <span className="phone">+1 3456 0976</span></div>
                    </div>
                    <div className="contacts__map" style={{ height: '90vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBhU23D994sipn_CF90xQUhqNfvcjPvweE" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <LocationMarker lat={defaultProps.center.lat} lng={defaultProps.center.lng}/>
                        </GoogleMapReact>
                    </div>
                </div>
        </div>
    )
}

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16" color={"#ff4f37"}>
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span className="location-marker__address">Minsk,Nemiga 26</span>
        </div>
    )
}


export default Contacts