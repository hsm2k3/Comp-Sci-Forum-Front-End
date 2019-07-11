import React from 'react';
import { NavLink } from 'react-router-dom';


const SectionsList = props => (
    props.sections.map(section => {
        return <NavLink className={"SectionListLink"} key={section.id} to={`/sections/${section.code ? section.code : section.title}`}>
            <li className={"SectionListItem"} >
                { section.code ? section.code : section.title }
                { props.oneResult && <div id="SectionsList_enterMessage">----ENTER----</div> }
            </li>
        </NavLink>
    })
);


export default SectionsList;