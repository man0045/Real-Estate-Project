import React from 'react'
import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import data from '../../utils/accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
const Value = () => {
    return (
        <section className = "v-wrapper">
            <div className="padding innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value we Give to You</span>
                    <span className= "secondaryText">
                        we always ready to help by providing the best services for you.<br/>
                        we believe a good blace to live can make your life better
                    </span>
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {data.map((item, i)=> {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">


                                            <AccordionItemState>
                                                {({expanded})=>
                                                 expanded 
                                                    ? setClassName("expanded")
                                                    : setClassName("collapsed")}
                                            </AccordionItemState>



                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value