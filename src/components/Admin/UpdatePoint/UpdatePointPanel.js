import UpdateBestPartnerBonusPanel from "./Bonus/UpdateBestPartnerBonusPanel";
import NewCommentPanel from "./Comment/NewCommentPanel";
import NewE10kPanel from "./E10k/NewE10kPanel";
import GCAdminPanel from "./GC/GCAdminPanel";
import NewLikesCommentPanel from "./LikesComment/NewLikesCommentPanel";
import NewLikesPublicationPanel from "./LikesPublication/NewLikesPublicationPanel";
import NewM10kPanel from "./M10k/NewM10kPanel";
import NewMessagePanel from "./Message/NewMessagePanel";
import NewMWIPanel from "./MWI/NewMWIPanel";
import NewPublicationPanel from "./Publication/NewPublicationPanel";

export default function UpdatePointPanel() {
  return (
    <>
      <UpdateBestPartnerBonusPanel />
      <GCAdminPanel />
      <NewCommentPanel />
      <NewE10kPanel />
      <NewLikesCommentPanel />
      <NewLikesPublicationPanel />
      <NewM10kPanel />
      <NewMessagePanel />
      <NewMWIPanel />
      <NewPublicationPanel />
    </>
  );
}
