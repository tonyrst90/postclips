export interface SvgType {
    iconId: string;
    className?: string;
    style?: {
        height: string;
        width: string;
        fill: string;
        marginRight: string;
    };
    onClick?: () => void;
}

export interface BreadcrumbsProps {
    title: string;
    mainTitle?: string;
    parent?: string;
}

export interface SpanType {
    text?: string;
    code?: string;
    mark?: string;
}

export interface CardHeaderSpanType {
    headerClass?: string;
    heading?: string
    smallHeading?: string
    span?: string
    headingClass?: string
    span2?: string;
    spanClass?: string;
    span2Class?: string
}
export interface CommonCardHeaderProp {
    title: string;
    span?: SpanType[];
    headClass?: string;
    icon?: JSX.Element
    tagClass?: string;
}

export interface RatioImageProp {
    className?: string;
    src: string;
    alt: string;
    style?: { height: number }
}

export interface TableHeadType {
    class?: string;
    name: string;
}

export interface TableHeaderProp {
    headeData: TableHeadType[]
}