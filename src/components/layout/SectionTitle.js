import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="section-title">
            <p className="section-title-main">{title}</p>
            {subTitle && <p className="section-title-sub">{subTitle}</p>}
        </div>
    );
};

export default SectionTitle;
