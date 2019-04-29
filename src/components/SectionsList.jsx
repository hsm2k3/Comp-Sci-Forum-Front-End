import React from 'react';
import { NavLink } from 'react-router-dom';


const SectionsList = props => (
    props.sections.map(section => {
        return <li className={"SectionListItem"} key={section.id}>
            <NavLink to={`/section/${section.code ? section.code : section.title}`}>
                { section.code ? section.code : section.title }
            </NavLink>
        </li>
    })
);


export default SectionsList;