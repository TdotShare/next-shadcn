import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from './ui/breadcrumb'

interface ItemMenuList {
    title: string;
}

export default function AppTitleMenu(props: {
    title: string,
    itemMenuList: ItemMenuList[]
}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                        {props.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {
                    props.itemMenuList.map((el, key) =>
                        <React.Fragment key={key}>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{el.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}
