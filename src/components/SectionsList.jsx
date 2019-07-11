import React from 'react';
import { NavLink } from 'react-router-dom';


const SectionsList = props => (
    props.sections.map(section => {
        return <NavLink className={"SectionListLink"} key={section.id} to={`/sections/${section.code ? section.code : section.title}`}>
            <li className={"SectionListItem"} >
                { props.oneResult && <span className="SectionsList_enterMessage">ENTER--->[ </span> }
                { section.code ? section.code : section.title }
                { props.oneResult && <span className="SectionsList_enterMessage"> ]</span> }
            </li>
        </NavLink>
    })
);


export default SectionsList;