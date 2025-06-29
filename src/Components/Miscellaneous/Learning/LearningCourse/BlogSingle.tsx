import RatioImage from "@/CommonComponent/RatioImage";
import { CommentTitleLearning, DateLearning, ImagePath } from "@/Constant";
import UserComment from "../../Blog/BlogSingle/common/UserComment";

const BlogSingle = () => {
  const DetailedCourseParagraph1 = `Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed.`;
  const DetailedCourseParagraph2 = `Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of one's own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists.`;
  const DetailedCourseHeading = `Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief. Internet.`;
  const LearningCommentOne = "The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.";
  const LearningCommentTwo= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";

  return (
    <div className="blog-single">
      <div className="blog-box blog-details">
        <RatioImage className="img-fluid w-100" src={`${ImagePath}/faq/learning-1.png`} alt="blog-main" />
        <div className="blog-details">
          <ul className="blog-social">
            <li>{DateLearning}</li>
            <li><i className="icofont icofont-user" />Mark <span>Jecno </span></li>
            <li><i className="icofont icofont-thumbs-up" />02 <span>Hits </span></li>
            <li><i className="icofont icofont-ui-chat" />Comments</li>
          </ul>
          <h4 className="mt-3">{DetailedCourseHeading}</h4>
          <div className="single-blog-content-top">
            <p className="mt-3">{DetailedCourseParagraph1}</p>
            <p>{DetailedCourseParagraph2}</p>
          </div>
        </div>
      </div>
      <section className="comment-box">
        <h3>{CommentTitleLearning}</h3>
        <hr />
        <ul>
              <UserComment ImageSrc='comment.jpg' userReplay text={LearningCommentOne} />
              <UserComment ImageSrc='9.jpg' text={LearningCommentTwo} />
            </ul>
      </section>
    </div>
  );
};

export default BlogSingle;