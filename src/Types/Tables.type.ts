import { ReactNode } from "react";
export interface FilterComponentProps {
    onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterText: string;
}

export interface ZeroConfigurationTableType {
    id: number
    name: string;
    position: string
    office: string
    age: number
    startDate: string
    salary: string
}

export interface StateSavingTableType {
    id: number
    name: string
    position: string
    color: string
    office: string
    age: number
    startDate: string
    salary: string
}

export interface CustomCellInterFace {
    position?: string, color?: string
}

export interface CustomNameImageProp {
    src: string;
    name: string;
}

export interface ScrollVerticalType {
    id: number
    image: string;
    name: string;
    position: string
    office: string
    age: number
    startDate: string
    salary: string
}

export interface StockResultColumnType {
    id: number;
    name: string;
    symbol: string;
    price: string;
    difference: React.ReactNode;
    last: React.ReactNode;
}

export interface RowCreateCallBackData {
    id: number;
    name: string;
    email: string;
    experience: string;
    sex: string;
    contactNumber: string;
    salary: string;
}

export interface CustomRowCreateInterFace {
    value: string;
}

export interface CustomExpandableComponentProp {
    data: {
      id: number;
      name: string;
      position: string;
      office: string;
      age: number;
      startDate: string;
      salary: string;
      action: string;
    };
  }

export interface AddRowsTableProp {
    column1: number;
    column2: number;
    column3: number;
    column4: number;
    column5: number;
}

export interface DeleteRowData {
    id: number,
    name: string;
    job: string;
    companyName: string;
    invoiceNumber: string;
    credit: JSX.Element;
    date: string;
    priority: JSX.Element;
    budget: string;
}

export interface FilterDataTableProp {
    id: number;
    image: string;
    name: string;
    position: string;
    office: string;
    age: number;
    startDate: string;
    salary: string;
}

export interface HtmlColumnsInterface {
    id: number;
    name: string;
    position: string;
    salary: string;
    office: string;
    email: string;
    color: string;
    badge: string;
}

export interface AjaxSourcedColumnsInterface {
    id: number;
    name: string;
    position: string;
    office: string;
    date: string;
    extends: string;
    salary: string;
}

export interface ServerSideProcessingInterface {
    id: number;
    name: string;
    position: string;
    office: string;
    lastName: string;
    date: string;
    salary: string;
}

interface HeadData {
    id: number;
    head: string;
}

export interface CommonTableProps {
    tableClass?: string;
    strip?: boolean;
    caption?: string;
    size?: string;
    hover?: boolean;
    headClass?: string;
    headRowClass?: string;
    headData: HeadData[];
    children?: ReactNode;
}

interface ComponentDetailsType {
    text?: string;
    code?: string;
}

interface ComponentData {
    tittle: string;
    tdClassName?: string;
    tableColData: JSX.Element;
    details: ComponentDetailsType[];
}

export interface CommonTableComponentProps {
    title: string;
    data: ComponentData[];
    tableClass?: string;
}