import React from 'react';
import {Header} from "../Header";
import {Contacts} from "../Contacts";

interface ILayout {
    children: React.ReactNode;
}

export const Layout = ({children}: ILayout): React.ReactElement => {
    return (
        <>
            <Header/>
                <main>{children}</main>
            <Contacts/>
        </>
    );
};
