import React from 'react';


const SectionsList = props => (
    props.sections.map(section => {
        return <li key={section.id}>{section.title}</li>
    })
);


export default SectionsList;