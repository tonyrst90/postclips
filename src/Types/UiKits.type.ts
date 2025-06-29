export interface TabContentProp {
    basicTab: string
}
interface ItemsArray {
    item?: string;
    divider?: boolean;
}
interface itemArray extends React.HTMLAttributes<HTMLElement> {
    btnColor?: string;
    btnText: string;
    items: ItemsArray[];
    dropClassName?: string;
    toggleClassName?: string;
    size?: string;
}
export interface CommonDropdownProp {
    item: itemArray;
}

interface ItemsArrays {
    item: string;
}
interface ArrayType {
    btnColor: string;
    btnText: string;
    items: ItemsArrays[];
}
export interface SplitButtonDropdownProp {
    item: ArrayType;
}

interface ItemProps {
    item: string;
}

export interface CommonAlignmentProp {
    value: {
        items: ItemProps[];
        btnText: string;
        btnColor: string;
        directions: any;
        dropClassName: string;
    };
}

export interface TabContentProp {
    basicTab: string
}
interface ModalDataTypes {
    isOpen: boolean;
    header?: boolean;
    class?: string;
    footer?: boolean;
    toggler: () => void
    title?: string;
    size?: string;
    bodyClass?: string;
    button?: string;
    center?: boolean;
}

export interface CommonModalProps {
    modalData: ModalDataTypes
    children: string | JSX.Element | JSX.Element[]
}

export interface CenterdModalBodyProps {
    modal: boolean;
    toggle: () => void;
}

export interface StaticModalFormProp {
    toggle: () => void;
}

export interface CommonCrocsModalTitleType {
    heading: string;
    subHeading: string;
    text: string;
}

interface ItemType {
    id: number;
    placement?: any;
    tooltip?: string | JSX.Element;
    btnColor?: string;
    btnText?: string;
    className?: string;
}

export interface CommonTooltipProp {
    item: ItemType;
    outline?: boolean;
}
export interface GridCardFooterProps {
    code: string;
    value: string;
}

export interface AlertType {
    clock: boolean;
    thumbsUp: boolean;
}

export enum Placement {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
}

export interface PopoverItems {
    id?: string;
    placement: Placement;
    popoverHeader?: string;
    popoverBody?: string;
    btnColor?: string;
    btnText?: string;
    trigger?: string;
    size?: string;
}

export interface CommonPopoverProp {
    data: PopoverItems
}

export interface PopoverOffsetState {
    popover1: boolean;
    popover2: boolean;
}