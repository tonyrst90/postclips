import { SpanType } from "./CommonComponent.type";
import { ActionMeta, SingleValue } from "react-select";
import { ChangeEvent } from "react";
export interface CustomWizardFormProps {
    title: string
    divClass?: string
    navColClass: string
    tabColClass: string
  differentId?: boolean;

}

export interface StepperHorizontalProp {
    step: number;
    finishClicked: boolean;
}

export interface BasicInfoFormData {
    email: string;
    firstName: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
    placeHolderName: string;
    cardNumber: string;
    expiration: string;
    cvvNumber: string;
    uploadDocumentation: string;
    informationCheckBox: boolean;
    linkedInLink: string;
    gitHubLink: string;
    giveFeedBack: string;
    state: string;
    agreeConditions: boolean;
}

export interface BasicInfoFormProps {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: BasicInfoFormData;
}

export interface StudentValidationFormData {
    password: string;
    name: string;
    email: string;
    confirmPassWord: string;
    portfolioURL: string;
    projectDescription: string;
    twitterUrl: string;
    gitHubUrl: string;
}
export interface StudentValidationFormProp {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: StudentValidationFormData;
    selectedImage?: string | null;
}

export interface VerticalWizardNavProps {
    activeCallBack: (tab: number) => void;
    steps: number
    differentId?: boolean;
}

export interface VerticalWizardFormData {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    state: string;
    zip: string
    recipientUserName: string;
    userName: string;
    cardNumber: string;
    expirationDate: string;
    cvvNumber: string;
    documentationName: string;
    bankName: string;
    feedBack: string;
}

export interface VerticalWizardFormProps {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    formData: VerticalWizardFormData;
}

export interface ActiveCallbackProp {
    activeCallBack: (tab: number) => void;
    differentId?: boolean;
}

export interface FirstModalProps {
    toggle: () => void
    modalOne: boolean
}

export interface SecondModalProps {
    toggle2: () => void;
    modal2: boolean;
}
export interface NewAddressModalProps {
    toggle: () => void;
    showModal: boolean;
}

interface RadioBoxValuesInterFace {
    address: string;
    shippingMethod: string;
}
export interface ShippingInformationProps {
    handleNextButton?: () => void;
    handleBackButton?: () => void;
    radioBoxValues: RadioBoxValuesInterFace;
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PaymentFormProps {
    payMethod: string;
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export enum CalendarItemType {
    DateTimeLocal = 'datetime-local',
    Date = 'date',
    Month = 'month',
    Week = 'week',
    Time = 'time',
}

export interface ReactstrapCalendarItem {
    id: number;
    labelText: string;
    type: CalendarItemType;
    value: string;
}

export interface MultiplesDateOptions {
    validatedValue: string | string[];
    input: HTMLElement;
    isTyping: boolean;
}

export interface TouchspinProp {
    color: string;
    arrowIcon?: boolean;
    outline?: boolean;
    btnClass?: string;
}

export interface CommonPrefixAndPostfixProp {
    postIcon?: boolean
    preIcon?: boolean
    preButton?: boolean
    PostButton?: boolean
    color?: boolean
}

interface SwitchItem {
    id: number;
    color: string;
    disabled?: boolean;
}

export interface CustomSwitchDataItem {
    id: number;
    cardClass?: string;
    formsize?: string;
    child: SwitchItem[];
}

interface IconSwitchItem {
    id: number;
    mediaBodyClass?: string;
    color: string;
    labelText: string;
}

export interface IconsUncheckedBordersSwitchProp {
    id: number;
    title: string;
    subTitle: SpanType[];
    child: IconSwitchItem[];
}

interface SwitchSizingIconItems {
    id: number;
    labelText: string;
    size?: string;
    check?: boolean;
    disabled?: boolean;
}

export interface SwitchSizingIconsTypes {
    id: number;
    title: string;
    subTitle: SpanType[];
    child: SwitchSizingIconItems[]
}

export interface CommonTypeaheadProps {
    title: string;
    subTitle: SpanType[];
    options: string[] | OptionType[];
    placeholder: string;
    labelKey?: string;
    className?: string;
    id: string;
}

export interface OptionType {
    name: string;
    header?: boolean;
    divider?: boolean;
}

export interface FormDataTypes {
    firstName: string;
    lastName: string;
    username: string;
    city: string;
    zip: string;
    password: string;
    file: string;
    description: string;
}

export interface Option {
    value: string;
    label: string;
}

export interface DropItemProps {
    selectedOption: null | string;
    setSelectedOption: (option: null | string) => void;
    validate: boolean;
    tip?: boolean;
    colClass: string;
    className?: string;
}

export interface DropItemChangeProp {
    (newValue: SingleValue<Option> | null, actionMeta: ActionMeta<Option>): void;
}

export interface RadioPayMethodProps {
    colClass: string;
}

export interface CommonSelectDropdownProps {
    inputClass?: string;
    options: string[];
    title: string;
    multiple?: boolean;
    optionClass?: string;
}

export interface CommonOpenMenuProps {
    inputId: string;
    colClass: string;
    options: string[];
}

export interface CustomFormSelectProps {
    inputId: string;
    options: string[];
    title: string;
}

export interface ButtonDropdownListProps {
    color: string;
    title?: string;
    options: string[];
    outline?: boolean;
    divider?: boolean;
    split?: boolean;
    span?: boolean;
}

export interface CommonCardFooterProps {
    footerClass?: string;
    color1: string;
    btn2Class?: string;
    btn1Class?: string;
    color2: string;
}

interface CheckboxItem {
    id: string;
    labelText: string;
    check?: boolean;
    disabled?: boolean;
    groupClass?: string;
}

export interface CheckboxGroup {
    id: number;
    title: string;
    child: CheckboxItem[];
}

interface InlineCheckboxItem {
    id: number;
    type: 'checkbox';
    check?: boolean;
    disabled?: boolean;
    text: string;
    formGroupClass?: string;
}
interface InlineRadioItem {
    id: number;
    type: 'radio';
    check?: boolean;
    disabled?: boolean;
    name: string;
    text: string;
    formGroupClass?: string;
}

export interface InlineInputType {
    id: number;
    title: string;
    child: (InlineCheckboxItem | InlineRadioItem)[];
}

export interface VariationRadioItem {
    id: number;
    title: string;
    child: RadioOption[];
}

interface RadioOption {
    id: number;
    labelText: string;
    image?: string;
    check?: boolean;
    name: string;
    icon?: string;
    iconColor?: string;
}

export interface VerticalStyleItem {
    id: number;
    megaTitle: string;
    child: ChildFormItem[];
}

export interface StarItem {
    id: number;
    class?: string;
}

export interface ChildFormItem {
    id: number;
    color: string;
    name: string;
    mediaBodyClass?: string;
    badgeTitle: string;
    digits: string;
    spanClass?: string;
    star?: StarItem[];
    spanText: string;
    colClass?: string;
    cardClass?: string;
    check?: boolean;
}