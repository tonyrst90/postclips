import { InputType } from "reactstrap/types/lib/Input";

export interface ProductListHeaderProp {
    linkTitle: string;
}

export interface ProductListType {
    imageSrc: string;
    productName: string;
    sku: string;
    category: string;
    price: string;
    quantity: string;
    status: string;
    rating: number;
}

export interface FilterComponentProps {
    onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterText: string;
}
interface VariantItems {
    color: string;
    images: string;
}

export interface ProductDataTypes {
    id: number;
    image: string;
    name: string;
    note: string;
    discription: string;
    discountPrice: string;
    status: string;
    price: number;
    stock: string;
    review: string;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
    variants: VariantItems[];
    quantity?: number | undefined;
    ribbonClassName?: string;
    sum?: number;
    total?: any;
}

export interface AddProductSliceType {
    navId: number;
    tabId: number;
    formValue: any;
  }

  
interface FilterValueItems {
    min: number;
    max: number;
}
export interface FilterValueTypes {
    brand: string[];
    color: string;
    value: FilterValueItems;
    sortBy: string;
    searchBy: string;
    category: string[];
}

export interface EccomInitialStateProps {
    productItem: ProductDataTypes[];
    cartData: ProductDataTypes[];
    filterValue: FilterValueTypes;
}

interface CommonProductSlideData {
    rowClass?: string;
    image: string;
    title: string;
    text: string;
}
export interface CommonProductSlideProp {
    data: CommonProductSlideData;
}

export interface ProductHoverProps {
    onClickHandle: (item: ProductDataTypes) => void;
    item: ProductDataTypes;
}

export interface ProductDetailsProps {
    item: ProductDataTypes;
}

export interface ProductModalProps {
    value: boolean;
    setOpenModal: (value: boolean) => void;
    dataId: undefined | number;
    modelData: ProductDataTypes | undefined;
}

export interface ModalProductDetailsProp {
    modelData: ProductDataTypes | undefined;
}

export interface ProductQuantityProp {
    dataId: undefined | number;
    modelData: ProductDataTypes | undefined;
}

export interface ButtonLinksProp {
    product: ProductDataTypes
}
export interface ProductFormNavProps {
    steps: number;
    setSteps: (step: number) => void;
}

export interface ProductTabContentProp {
    activeCallBack: (tab: number) => void;
    steps: number
}

export interface ActiveCallbackProp {
    activeCallBack: (tab: number) => void;
}

export interface ToolbarBoxProp {
    label?: boolean;
    paragraph: string
}

export interface ProductTagProp {
    title: string;
    subTitle?: boolean;
}

export interface TooltipProp {
    labelText: string;
    tooltip: string;
    targetId: string;
}

export interface AdvanceCallBackProp {
    activeCallBack: (tab: number) => void;
    activeBorder: (val: number) => void;
}

export interface ActiveBorderProp {
    activeBorder: (val: number) => void;
}

export interface FormGroupCommonProp {
    type: InputType;
    placeholder?: string;
    formClass?: string;
    rows?: number;
}

export interface SelectCommonProp {
    data: string[];
    size: number;
    selectClass?: string;
}

export interface OrderHistoryImageType {
    name: string;
    tag?: string;
}

export interface OrderHistoryTableColumns {
    image: string;
    productName: string;
    tag: string;
    size: string;
    color: string;
    articleNumber: number;
    units: number;
    price: string;
    icon: JSX.Element;
}

export interface CheckoutFormType {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
}

export interface InvoicePrintType {
    handlePrint?: () => void;
  }

  interface VariantsType {
    color: string;
    images: string;
  }
  
  export interface CartType {
    variants: VariantsType[];
    total?: any;
    sum?: number;
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    price: number;
    status: string;
    ribbonClassName?: string;
    stock: string;
    review: string;
    rating: number;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
  }


  interface VariantsInterface {
    color: string;
    images: string;
  }

  export interface ProductItemInterface {
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    status: string;
    price: number;
    stock: string;
    review: string;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
    variants: VariantsInterface[];
    ribbonClassName?: string;
  }

  interface ValueInterface {
    min: number;
    max: number;
  }
  export interface FilterInterface {
    color: string;
    searchBy: string;
    value: ValueInterface;
    sortBy: string;
    category: string[];
    brand: string[];
  }