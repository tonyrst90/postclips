import { ProjectInitialValue, ProjectListData } from "@/Types/Project.type";
import { CheckCircle, Info, Target } from "react-feather";
import * as Yup from "yup";

export const projectListHeadData = [
    { id: "1", icon: <Target />, title: 'All' },
    { id: "2", icon: <Info />, title: 'Doing' },
    { id: "3", icon: <CheckCircle />, title: 'Done' },
]

export const newProjectInitialValue: ProjectInitialValue = {
    title: "",
    client: "",
    progress: 0,
    type: "",
    priority: "",
    size: "",
    description: "",
};

export const newProjectValidation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    client: Yup.string().required("Client Name is required"),
    description: Yup.string().required("Some Details is required"),
    progress: Yup.number().required("Between 0 to 100").max(100),
});

export const projectListData: ProjectListData[] = [
    {
        id: 1,
        title: "Enzo admin Design",
        badge: "Doing",
        image: "3.jpg",
        sites: "Themeforest, australia",
        description:
            "Enzo Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "12",
        resolved: "5",
        comment: "7",
        like: "10",
        progress: 70,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "primary",
    },
    {
        id: 2,
        title: "Govo admin Design",
        badge: "Done",
        image: "5.jpg",
        sites: "Envato, australia",
        description:
            "Govo Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "24",
        resolved: "24",
        comment: "40",
        like: "3",
        progress: 100,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "secondary",
    },
    {
        id: 3,
        title: "Poco admin Design",
        badge: "Done",
        image: "1.jpg",
        sites: "Envato, australia",
        description:
            "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "40",
        resolved: "40",
        comment: "20",
        like: "2",
        progress: 100,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "success",
    },
    {
        id: 4,
        title: "Xolo admin Design",
        badge: "Done",
        image: "4.jpg",
        sites: "Envato, australia",
        description:
            "Xolo Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "24",
        resolved: "24",
        comment: "40",
        like: "3",
        progress: 100,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "info",
    },
    {
        id: 5,
        title: "Zeta admin Design",
        badge: "Doing",
        image: "1.jpg",
        sites: "Themeforest, australia",
        description:
            "Zeta Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "12",
        resolved: "5",
        comment: "7",
        like: "10",
        progress: 70,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "warning",
    },
    {
        id: 6,
        title: "Tivo admin Design",
        badge: "Done",
        image: "5.jpg",
        sites: "Envato, australia",
        description:
            "Tivo Admin is a full featured, multipurpose, premium bootstrap admin template.",
        issue: "40",
        resolved: "40",
        comment: "20",
        like: "2",
        progress: 100,
        customers_image1: "3.jpg",
        customers_image2: "5.jpg",
        customers_image3: "1.jpg",
        color: "danger",
    },
];