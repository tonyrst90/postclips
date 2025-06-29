import { Alert, Badge, Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Media, Progress, UncontrolledDropdown } from "reactstrap";
import { useState } from "react";
import { DefaultButtonsTitle, Href } from "@/Constant";

export const uiComponentTableData = [
    {
        tittle: "Button",
        tableColData: <Button color="primary">{DefaultButtonsTitle}</Button>,
        details: [
            {
                text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
            },
        ],
    },
    {
        tittle: "Round Buttons",
        tableColData: (
            <Button color="primary" className="btn-pill">
                {DefaultButtonsTitle}
            </Button>
        ),
        details: [
            {
                text: "Use",
                code: ".btn-pill",
            },

            { text: " class to button for Round Buttons." },
        ],
    },
    {
        tittle: "Button dropdowns",
        tableColData: (
            <UncontrolledDropdown>
                <DropdownToggle color="primary" caret>
                    Primary
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Dropdown header</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Separated link</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        ),
        details: [
            {
                text: "Use",
                code: ".dropdown-toggle",
            },

            { text: "class to button for Dropdown-toggle." },
        ],
    },
    {
        tittle: "Basic Button group",
        tableColData: (
            <ButtonGroup>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
            </ButtonGroup>
        ),
        details: [
            {
                text: "Use",
                code: "btn-group",
            },

            {
                text: "class to button for",
                code: "div",
            },
            { text: "." },
        ],
    },
    {
        tittle: "Buttons with Icon",
        tableColData: (
            <Button color="primary">
                <i className="fa fa-info-circle" /> Primary
            </Button>
        ),
        details: [
            {
                text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
            },
        ],
    },
    {
        tittle: "Icon Button",
        tableColData: (
            <Button color="primary">
                <i className="fa fa-camera" />
            </Button>
        ),
        details: [
            {
                text: "Simple Icon Button",
            },
        ],
    },
    {
        tittle: "Loading Buttons",
        tableColData: (
            <Button color="primary">
                <i className="fa fa-spin fa-spinner me-2" />
                Expand UP
            </Button>
        ),
        details: [
            {
                text: "Expand Animation Buttons",
            },
        ],
    },
];

const DismissibleAlerts = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
        <Alert color="secondary" isOpen={visible} toggle={onDismiss} fade>
            <p>
                <strong>Holy !</strong> You can check in on some of those fields below.
            </p>
        </Alert>
    );
};

const AlertsWithIcons = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
        <Alert color="primary" isOpen={visible} toggle={onDismiss}>
            <i className="icofont icofont-heart-alt"></i>
            <p>Good Morning! Start your day with some alerts.</p>
        </Alert>
    );
};
export const alertTableData = [
    {
        tittle: "Basic Alert",
        tableColData: (
            <Alert color="primary">
                <p>
                    <strong>Success!</strong> Indicates a successful or positive action.
                </p>
            </Alert>
        ),
        details: [
            {
                text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
                code: 'alert alert-primary'
            },
            {
                text: ",",
                code: "alert alert-secondary",
            },
            {
                text: ",",
                code: " alert alert-success",
            },
            {
                text: ",",
                code: "alert alert-info",
            },
            { text: "classes for alert with all theme colors." },
        ],
    },
    {
        tittle: "Alerts with Links",
        tableColData: (
            <Alert color="primary">
                <p>
                    <strong>Success!</strong> You should
                    <a className="alert-link font-light" href={Href}> read this message</a>.
                </p>
            </Alert>
        ),
        details: [
            {
                text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
                code: " alert alert-primary",
            },
            {
                text: ",",
                code: "alert alert-secondary",
            },
            {
                text: ",",
                code: " alert alert-success",
            },
            {
                text: ",",
                code: "alert alert-info",
            },
            { text: "classes for alert with all theme colors." },
        ],
    },
    {
        tittle: "Dismissible Alerts",
        tableColData: <DismissibleAlerts />,
        details: [
            {
                text: "Add a dismiss button and the",
                code: " alert alert-dismissable",
            },
            {
                text: "class, which adds extra padding to the right of the alert and positions the",
                code: "close",
            },
            {
                text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
                code: "a",
            },
            {
                text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
            },
        ],
    },
    {
        tittle: "Alerts with icons",
        tableColData: <AlertsWithIcons />,
        details: [
            {
                text: "Add a dismiss button and the",
                code: " alert alert-dismissable",
            },
            {
                text: "class, which adds extra padding to the right of the alert and positions the",
                code: "close",
            },
            {
                text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
                code: "a",
            },
            {
                text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
            },
        ],
    },
];

export const progressTableData = [
    {
        tittle: "Default Progress",
        tableColData: <Progress color="primary" value={75} />,
        details: [
            {
                text: "Uses a progress bar with class",
                code: "progress-bar",
            },
            {
                text: "and background color",
                code: "bg-primary, bg-secondary",
            },
            {
                text: " also change",
            },
        ],
    },
    {
        tittle: "Striped Progress",
        tableColData: <Progress color="warning" striped value={75} />,
        details: [
            {
                text: "Uses a gradient to create a striped effect class.",
                code: "progress-bar-striped",
            },
        ],
    },
    {
        tittle: "Progress Sizes",
        tableColData: <Progress color="primary" className="lg-progress-bar" value={75} />,
        details: [
            {
                text: "Different sized progress. For Default progress, class need",
                code: "lg-progress-bar",
            },
            {
                text: "on div.",
            },
        ],
    },
];

export const checkboxTableData = [
    {
        tittle: "Basic Checkbox",
        tableColData: (
            <>
                <Input id="checkbox1" type="checkbox" className="me-2" />
                <Label htmlFor="checkbox1">Default</Label>
            </>
        ),
        details: [
            {
                text: "Basic Checkbox",
            },
        ],
    },
    {
        tittle: "Default Checkbox Squar",
        tableColData: (
            <div className="checkbox m-squar">
                <Input id="checkbox3" type="checkbox" />
                <Label htmlFor="checkbox3">Default</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: ".m-squar",
            },
            {
                text: " checkbox.",
            },
        ],
    },
    {
        tittle: "Basic Skin Check",
        tableColData: (
            <div className="checkbox checkbox-dark">
                <Input id="checkbox-state-dark" type="checkbox" />
                <Label htmlFor="checkbox-state-dark">Brand state</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: "checkbox-dark",
            },
            { text: "for this style of checkbox." },
        ],
    },
    {
        tittle: "Flat Skin Check",
        tableColData: (
            <div className="checkbox checkbox-solid-primary">
                <Input id="solid6" type="checkbox" defaultChecked />
                <Label htmlFor="solid6">checked</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: `checkbox-solid-*`,
            },
            {
                text: ",",
                code: "primary, secondary, success, info, warning, danger",
            },
            {
                text: "for this style of checkbox.",
            },
        ],
    },
    {
        tittle: "Disable Check",
        tableColData: (
            <div className="checkbox checkbox-solid-primary">
                <Input id="solid2" type="checkbox" disabled />
                <Label htmlFor="solid2">Disabled</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: "disabled",
            },
            {
                text: ",",
                code: "primary, secondary, success, info, warning, danger",
            },
            {
                text: "for this style of checkbox disable.",
            },
        ],
    },
    {
        tittle: "Inline  Checkbox",
        tableColData: (
            <FormGroup className="m-b-0 m-checkbox-inline">
                <div className="checkbox checkbox-primary">
                    <Input id="inline-1" type="checkbox" />
                    <Label htmlFor="inline-1">Option 1</Label>
                </div>
                <div className="checkbox checkbox-secondary">
                    <Input id="inline-2" type="checkbox" />
                    <Label htmlFor="inline-2">Option 1</Label>
                </div>
                <div className="checkbox checkbox-success">
                    <Input id="inline-3" type="checkbox" />
                    <Label htmlFor="inline-3">Option 1</Label>
                </div>
            </FormGroup>
        ),
        details: [
            {
                text: "Wrap with use",
                code: "disabled",
            },
            {
                text: ",",
                code: "primary, secondary, success, info, warning, danger",
            },
            {
                text: "for this style of checkbox disable.",
            },
        ],
    },
];

export const radioBoxTableData = [
    {
        tittle: "Basic Radio Buttons",
        tableColData: (
            <>
                <Input id="radio" type="radio" className="me-2" />
                <Label htmlFor="radio">Default radio</Label>
            </>
        ),
        details: [
            {
                text: "Basic Radio Buttons",
            },
        ],
    },
    {
        tittle: "Default Radio",
        tableColData: (
            <div className="radio radio-primary">
                <Input id="radio1" type="radio" name="radio1" defaultValue="option1" />
                <Label htmlFor="radio1">Option 1</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: ".radio-*",
            },
            {
                text: " and color ",
                code: ".radio-*",
            },
            { code: "primary , secondary , success , info" },
            { text: "on Radio." },
        ],
    },
    {
        tittle: "Checked Radio",
        tableColData: (
            <div className="radio radio-primary">
                <Input
                    id="radio44"
                    type="radio"
                    name="radio1"
                    defaultValue="option1"
                    defaultChecked
                />
                <Label htmlFor="radio44">Checked</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: "checkbox-dark",
            },
            { text: "for this style of checkbox." },
        ],
    },
    {
        tittle: "Flat Skin Check",
        tableColData: (
            <div className="radio radio-primary">
                <Input
                    id="radio33"
                    type="radio"
                    name="radio1"
                    defaultValue="option1"
                    disabled
                />
                <Label htmlFor="radio33">Disabled</Label>
            </div>
        ),
        details: [
            {
                text: "Wrap with use",
                code: `checkbox-solid-*`,
            },
            {
                text: ",",
                code: "primary, secondary, success, info, warning, danger",
            },
            {
                text: "for this style of checkbox.",
            },
        ],
    },
    {
        tittle: "Inline  Checkbox",
        tableColData: (
            <FormGroup className="m-b-0 m-checkbox-inline">
                <div className="radio radio-primary">
                    <Input
                        id="radioinline1"
                        type="radio"
                        name="radio1"
                        defaultValue="option1"
                    />
                    <Label htmlFor="radioinline1">Option 1</Label>
                </div>
                <div className="radio radio-secondary">
                    <Input
                        id="radioinline2"
                        type="radio"
                        name="radio1"
                        defaultValue="option1"
                    />
                    <Label htmlFor="radioinline2">Option 1</Label>
                </div>
                <div className="radio radio-success">
                    <Input
                        id="radioinline3"
                        type="radio"
                        name="radio1"
                        defaultValue="option1"
                    />
                    <Label htmlFor="radioinline3">Option 1</Label>
                </div>
            </FormGroup>
        ),
        details: [
            {
                text: "Wrap with use",
                code: "disabled",
            },
            {
                text: ",",
                code: "primary, secondary, success, info, warning, danger",
            },
            {
                text: "for this style of checkbox.",
            },
        ],
    },
];

export const selectBoxTableData = [
    {
        tittle: "Single Select",
        tableColData: (
            <Input type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        ),
        details: [
            {
                text: "Use for basic select control.",
            },
        ],
    },
    {
        tittle: "Disabled Select Mode",
        tableColData: (
            <Input type="select" disabled>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        ),
        details: [
            {
                text: "Use for disabled select control add ",
                code: "disabled",
            },
            {
                text: ".",
            },
        ],
    },
    {
        tittle: "Large Select Mode",
        tableColData: (
            <>
                <Input type="select" bsSize="lg" className="mb-10">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <Input type="select" bsSize="sm" className="mt-5 mb-10">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </>
        ),
        details: [
            {
                text: "Use for large and small select control add class",
                code: "form-control-*",
            },
            {
                code: "lg, sm",
            },
            {
                text: ".",
            },
        ],
    },
    {
        tittle: "Example multiple select",
        tableColData: (
            <Input type="select" multiple className="custom-scrollbar">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        ),
        details: [
            {
                text: "Use for multi select control add code ",
                code: "multiple",
            },
            {
                text: "on select.",
            },
        ],
    },
];
export const inputTableData = [
    {
        tittle: "Default Input text",
        tableColData: (
            <Input className="input-primary" type="email" placeholder="Input text" />
        ),
        details: [
            {
                text: "Use for basic select control.",
            },
        ],
    },
    {
        tittle: "Input Hover Color ",
        tableColData: <Input type="email" placeholder="Input text" />,
        details: [
            {
                text: "Use for basic input color add class",
                code: "input-air-*",
            },
            {
                code: "primary, secondary, success, info",
            },
            {
                text: ".on input",
            },
        ],
    },
];

export const badgesTableData = [
    {
        tittle: "Basic Pills",
        tdClassName: "pills-component",
        tableColData: <Badge color="primary">Primary</Badge>,
        details: [
            {
                text: "Use the",
                code: " .badge ",
            },
            {
                text: " class, followed by. with badge color use class ",
                code: ".badge-* ",
            },
            {
                code: "primary , secondary , success , info, warning, danger, light",
            },
            { text: "  class within element to create default pill." },
        ],
    },
    {
        tittle: "Label With Icon",
        tableColData: (
            <Badge color="primary" className="label-square">
                <i className="fa fa-paperclip fa-lg me-2"></i>
                <span className="f-14">Primary Label</span>
            </Badge>
        ),
        details: [
            {
                text: "Use the",
                code: " label-square ",
            },
            {
                code: "div",
                text: " class with ",
            },
        ],
    },
];
export const toolTipTriggersData = [
    {
        tittle: "Hover",
        tableColData: (
            <Button color="primary">
                Primary
            </Button>
        ),
        details: [
            {
                text: `Use data-bs-toggle="tooltip" for hover trigger. This is a default trigger`,
            },
        ],
    },
    {
        tittle: "Link",
        tableColData: <Button color="primary">Link</Button>,
        details: [
            {
                text: "Use the",
                code: " label-square ",
            },
            {
                code: "div",
                text: " class with ",
            },
        ],
    },
    {
        tittle: "outline button",
        tableColData: (
            <Button outline color="primary">
                Primary
            </Button>
        ),
        details: [
            {
                text: "Use",
                code: " btn btn-outline-info ",
            },
            {
                code: "btn btn-outline-dark-2x",
                text: " for outline trigger. and button bold Border use class",
            },
        ],
    },
];

export const switchTableData = [
    {
        tittle: "Default Switch",
        tdClassName: "pills-component",
        tableColData: (
            <Label className="switch">
                <Input type="checkbox" defaultChecked />
                <span className="switch-state" />
            </Label>
        ),
        details: [
            {
                text: `Use class `,
                code: ` switch `,
            },
            {
                text: " for label.",
            },
        ],
    },
    {
        tittle: "Disable Switch",
        tableColData: (
            <Label className="switch">
                <Input type="checkbox" disabled />
                <span className="switch-state" />
            </Label>
        ),
        details: [
            {
                text: "this Disable Switch ",
                code: "disabled",
            },
        ],
    },
    {
        tittle: "Switch Color",
        tableColData: (
            <Media body className="icon-state">
                <Label className="switch">
                    <Input type="checkbox" defaultChecked />
                    <span className="switch-state bg-primary" />
                </Label>
            </Media>
        ),
        details: [
            {
                text: "Use class",
                code: "bg-* Primary , Secondary , Success , Info , Warning , Danger",
            },
            {
                text: "in span with icon show switch ",
                code: " icon-state ",
            },
            {
                text: "on div.",
            },
        ],
    },
    {
        tittle: "Switch Outline",
        tableColData: (
            <Media body className="icon-state switch-outline">
                <Label className="switch">
                    <Input type="checkbox" defaultChecked />
                    <span className="switch-state bg-primary" />
                </Label>
            </Media>
        ),
        details: [
            {
                text: "Use  class  ",
                code: "switch-outline",
            },
            {
                text: "on div.",
            },
        ],
    },
];