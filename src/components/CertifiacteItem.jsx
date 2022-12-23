import React from 'react';
import PropTypes from 'prop-types';


const CertificateItem = ({
    name,img
}) => (
    <div className={`project--item certificate `}>
        <img src={`/assets/certificates/${img}`} />
        <div class="middle">
            <div class="text">{name}</div>
        </div>
    </div>
);
CertificateItem.defaultProps = {
    name: '',
    img: '',
};

CertificateItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
};

export default CertificateItem;
