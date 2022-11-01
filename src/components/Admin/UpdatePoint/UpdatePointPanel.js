import UpdateBestPartnerBonusPanel from "./Bonus/UpdateBestPartnerBonusPanel";
import NewCommentPanel from "./Comment/NewCommentPanel";
import NewE10kPanel from "./E10k/NewE10kPanel";
import NewLikesCommentPanel from "./LikesComment/NewLikesCommentPanel";
import NewLikesPublicationPanel from "./LikesPublication/NewLikesPublicationPanel";
import NewM10kPanel from "./M10k/NewM10kPanel";
import NewMWIPanel from "./MWI/NewMWIPanel";

export default function UpdatePointPanel() {
  return (
    <>
      <UpdateBestPartnerBonusPanel />
      <NewCommentPanel />
      <NewE10kPanel />
      <NewLikesCommentPanel />
      <NewLikesPublicationPanel />
      <NewM10kPanel />
      <NewMWIPanel />
    </>
  );
}
