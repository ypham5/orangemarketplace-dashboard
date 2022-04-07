import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiViewGrid, HiPlusCircle, HiInbox, HiPencilAlt, HiUserGroup, HiChartBar, HiSpeakerphone, HiReceiptTax, HiGift, HiViewGridAdd, HiOfficeBuilding, HiQuestionMarkCircle } from 'react-icons/hi';


export const menuItems = [
    {
        name: "View All",
        to: "/dashboard",
        icon: <HiViewGrid />,
    },
    {
        name: "Add Products",
        to: "add",
        icon: <HiPlusCircle />,
    },
    {
        name: "Edit Products",
        to: "edit",
        icon: <HiPencilAlt />,
    },
    {
        name: "Orders",
        to: `orders`,
        icon: <HiInbox />,
    },
    {
        name: "Customers",
        to: `customers`,
        icon: <HiUserGroup />,
    },
    {
        name: "Analytics",
        to: `analytics`,
        icon: <HiChartBar />,
    },
    {
        name: "Marketing",
        to: `marketing`,
        icon: <HiSpeakerphone />,
    },
    {
        name: "Discounts",
        to: `discounts`,
        icon: <HiReceiptTax />,
    },
    {
        name: "Gift Cards",
        to: `giftcards`,
        icon: <HiGift />,
    },
    {
        name: "Apps",
        to: `apps`,
        icon: <HiViewGridAdd />,
    },
    {
        name: "Online Stores",
        to: `onlinestores`,
        icon: <HiOfficeBuilding />,
    },
    {
        name: "Getting Helps",
        to: `gettinghelps`,
        icon: <HiQuestionMarkCircle />,
    },

];
const ProductOptionStyles = styled.ul`
    a:hover {
        text-decoration: none;
    }
`;

function ProductOptions(props) {
    return (
        <ProductOptionStyles>
            {/* <h3>Products</h3> */}
            {menuItems.map((menuItem, index) => (
                <li key={index} onClick={props.onClick}>
                <Link to={menuItem.to}>
                    <div className="menu-item">
                        <div className="menu-icon">
                            {menuItem.icon}
                        </div>
                        <span>
                            {menuItem.name}
                        </span>
                    </div>
                </Link>
                </li >
            ))}
        </ProductOptionStyles>
    )
}

export default ProductOptions