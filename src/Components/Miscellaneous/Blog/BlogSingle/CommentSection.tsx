import { Comments } from "@/Constant";
import UserComment from "./common/UserComment";

const CommentSection = () => {
  const SingleBlogParagraph: string = `The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tusker elephant.`;
  const CommentBlog2: string = "From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
  const SingleBlogParagraph2: string = `Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.`;
  const SingleBlogParagraph3: string = `Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`

  return (
    <section className="comment-box">
      <h3>{Comments}</h3>
      <hr />
      <ul>
        <UserComment ImageSrc="comment.jpg" userReplay text={SingleBlogParagraph} />
        <UserComment ImageSrc="4.jpg" text={CommentBlog2} />
        <UserComment ImageSrc="12.png" text={SingleBlogParagraph2} />
        <UserComment ImageSrc="14.png" text={SingleBlogParagraph3} />
      </ul>
    </section>
  );
};

export default CommentSection;
