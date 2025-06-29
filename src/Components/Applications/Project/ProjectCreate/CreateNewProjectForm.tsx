import TitleAndClientSection from './TitleAndClientSection';
import ProjectSection from './ProjectSection';
import DateSection from './DateSection';
import DescriptionSection from './DescriptionSection';
import UploadProjectFile from './UploadProjectFile';
import ButtonSection from './ButtonSection';
import { setCreatedData } from '@/Redux/Reducers/ProjectSlice';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { ProjectInitialValue } from '@/Types/Project.type';
import { Form, Formik } from 'formik';
import { newProjectInitialValue, newProjectValidation } from '@/Data/Applications/Project/ProjectList';

const CreateNewProjectForm = () => {
  const router = useRouter();
  const { createdFormData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values: ProjectInitialValue) => {
    const submittedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      image: "3.jpg",
      sites: "Themeforest, australia",
      description: "PostClips Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customers_image1: "3.jpg",
      customers_image2: "5.jpg",
      customers_image3: "1.jpg",
      progress: values.progress,
      projectLevel: values.progress,
    };
    dispatch(setCreatedData([...createdFormData, submittedData]));
    router.push(`/app/project/project_list`);
  };
  return (
    <Formik initialValues={newProjectInitialValue} validationSchema={newProjectValidation} onSubmit={projectSubmit}>
      {() => (
        <Form className="theme-form">
          <TitleAndClientSection />
          <ProjectSection />
          <DateSection />
          <DescriptionSection />
          <UploadProjectFile />
          <ButtonSection />
        </Form>
      )}
    </Formik>
  )
}
export default CreateNewProjectForm