import React from 'react';


const SectionsPageHeader = (props) => (
    <div className={'SectionsPageHeader'}>
        <h4>{props.section.code ? props.section.code + ' - ' + props.section.title : props.section.title}</h4>
        <p>{props.section.description}</p>
    </div>
);


export default SectionsPageHeader;