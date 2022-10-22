import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Home from "./components/Home";
import ContactPartner from "./Pages/ContactPartner";
import Program from "./components/Program";
import PartnerNavMenu from "./components/Partenaire Omisify/PartnerNavMenu";
import PartnerHome from "./components/Partenaire Omisify/PartnerHome";
import PartnerContact from "./components/Partenaire Omisify/PartnerContact";
import PartnerTrans from "./components/Partenaire Omisify/PartnerTrans";
import PartnerHistorical from "./components/Partenaire Omisify/PartnerHistorical";

import AkouaDjenebou from "./Pages/Partenaire Omisify/AkouaDjenebou";
import AkouaHome from "./Pages/Partenaire Omisify/AkouaHome";
import AkouaNavMenu from "./components/Partenaire Omisify/AkouaNavMenu";
import AkouaTrans from "./components/Partenaire Omisify/AkouaTrans";
import AkouaContactAction from "./components/Partenaire Omisify/AkouaContactAction";
import AkouaAllHisto from "./components/Partenaire Omisify/AkouaAllHisto";
import AkouaHistoOne from "./components/Partenaire Omisify/AkouaHistoOne";
import AkouaHistoTwo from "./components/Partenaire Omisify/AkouaHistoTwo";
import AkouaHistoThree from "./components/Partenaire Omisify/AkouaHistoThree";
import AkouaHistoFour from "./components/Partenaire Omisify/AkouaHistoFour";
import AkouaHistoFive from "./components/Partenaire Omisify/AkouaHistoFive";
import AkouaHistoSix from "./components/Partenaire Omisify/AkouaHistoSix";
import AkouaHistoSeven from "./components/Partenaire Omisify/AkouaHistoSeven";
import AkouaHistoEight from "./components/Partenaire Omisify/AkouaHistoEight";
import AkouaHistoNine from "./components/Partenaire Omisify/AkouaHistoNine";
import AkouaHistoTen from "./components/Partenaire Omisify/AkouaHistoTen";
import AkouaHistoEleven from "./components/Partenaire Omisify/AkouaHistoEleven";
import AkouaHistoTwelve from "./components/Partenaire Omisify/AkouaHistoTwelve";
import AkouaHistoThirty from "./components/Partenaire Omisify/AkouaHistoThirty";
import AkouaHistoFourteen from "./components/Partenaire Omisify/AkouaHistoFourteen";
import AkouaHistoFifteen from "./components/Partenaire Omisify/AkouaHistoFifteen";
import AkouaHistoSixteen from "./components/Partenaire Omisify/AkouaHistoSixteen";
import AkouaHistoSeventeen from "./components/Partenaire Omisify/AkouaHistoSeventeen";
import AkouaHistoEighteen from "./components/Partenaire Omisify/AkouaHistoEighteen";
import AkouaHistoNineteen from "./components/Partenaire Omisify/AkouaHistoNineteen";
import AkouaHistoTwenty from "./components/Partenaire Omisify/AkouaHistoTwenty";
import AkouaStats from "./components/Partenaire Omisify/AkouaStats";
import Stats from "./components/Partenaire Omisify/Stats";
import PartnerSettings from "./components/Partenaire Omisify/PartnerSettings";
import Auth from "./components/Auth";
import AfterLogin from "./components/AfterLogin";
import AfterLoginSuccess from "./components/AfterLoginSuccess";
import AfterSignup from "./components/AfterSignup";
import NavMenu from "./components/NavMenu";
import SecureComment from "./components/September/SecureComment";
import SecureLike from "./components/September/SecureLikePublication";
import SecureMessage from "./components/September/SecureMessage";
import SecureLikePublication from "./components/September/SecureLikePublication";
import SecureLikeComment from "./components/September/SecureLikeComment";
import SecureM10k from "./components/September/SecureM10k";
import SecureMWI from "./components/September/SecureMWI";
import SecurePublication from "./components/September/SecurePublication";
import SecureEmail from "./components/September/SecureEmail";
import SecurePWI from "./components/September/SecurePWI";
import SecureNewPassword from "./components/Reset-Password/SecureNewPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";
import AfterNewPassword from "./components/Reset-Password/AfterNewPassword";
import Update from "./components/Update/Update";
import SecureUpdate from "./components/Update/SecureUpdate";
import SecureNavigation from "./components/Navigation/SecureNavigation";
import UpdateSuccess from "./components/Update/UpdateSuccess";
import Logout from "./components/Logout/Logout";
import AfterLogout from "./components/Logout/AfterLogout";
import SecureLogoutConfirm from "./components/Logout/SecureLogoutConfirm";
import Infos from "./components/Settings/Infos";

import SecureInfosUpdate from "./components/Settings/SecureInfosUpdate";
import User from "./components/Admin/User/User";
import HomePanel from "./components/Admin/HomePanel";

import InfosUpdate from "./components/Settings/InfosUpdate";
import InfosUpdateSuccess from "./components/Settings/InfosUpdateSuccess";

// bonus
import SecureWelcomeBonus from "./components/Bonus/WelcomeBonus/SecureWelcomeBonus";
import AfterWelcomeBonus from "./components/Bonus/WelcomeBonus/AfterWelcomeBonus";
import Bonus from "./components/Bonus/Bonus";
import SecureDaysOfGenerosity from "./components/Bonus/DaysOfGenerosity/SecureDaysOfGenerosity";
import DaysOfGenerositySuccess from "./components/Bonus/DaysOfGenerosity/DaysOfGenerositySuccess";

// update point
import UpdatePoint from "./components/UpdatePoint/UpdatePoint";
import UpdatePointSuccess from "./components/UpdatePoint/UpdatePointSuccess";
import SecureUpdateComment from "./components/UpdatePoint/October/Comment/SecureUpdateComment";
import SecureUpdateE10k from "./components/UpdatePoint/October/E10k/SecureUpdateE10k";
import SecureUpdateEmail from "./components/UpdatePoint/October/Email/SecureUpdateEmail";
import SecureUpdateLikesComment from "./components/UpdatePoint/October/LikesComment/SecureUpdateLikesComment";
import SecureUpdateLikesPublication from "./components/UpdatePoint/October/LikesPublication/SecureUpdateLikesPublication";
import SecureUpdateM10k from "./components/UpdatePoint/October/M10k/SecureUpdateM10k";
import SecureUpdateMessage from "./components/UpdatePoint/October/Message/SecureUpdateMessage";
import SecureUpdateMWI from "./components/UpdatePoint/October/MWI/SecureUpdateMWI";
import SecureUpdatePublication from "./components/UpdatePoint/October/Publication/SecureUpdatePublication";
import SecureUpdatePWI from "./components/UpdatePoint/October/PWI/SecureUpdatePWI";
import SecureUpdatePWP from "./components/UpdatePoint/October/PWP/SecureUpdatePWP";

// panel welcome bonus
import WelcomeBonusPanel from "./components/Admin/Bonus/WelcomeBonusPanel";
import UpdateCommentPanel from "./components/Admin/UpdatePoint/Comment/UpdateCommentPanel";

// panel comment october
import PanelCommentOctober from "./components/Admin/2022/October/Comment/PanelCommentOctober";
import Panele10kOctober from "./components/Admin/2022/October/E10k/PanelE10kOctober";
import PanelemailOctober from "./components/Admin/2022/October/Email/PanelEmailOctober";
import PanellikescommentOctober from "./components/Admin/2022/October/LikesComment/PanelLikesCommentOctober";
import PanellikespublicationOctober from "./components/Admin/2022/October/LikesPublication/PanelLikesPublicationOctober";
import Panelm10kOctober from "./components/Admin/2022/October/M10k/PanelM10kOctober";
import PanelmessageOctober from "./components/Admin/2022/October/Message/PanelMessageOctober";
import PanelmwiOctober from "./components/Admin/2022/October/MWI/PanelMWIOctober";
import PanelpublicationOctober from "./components/Admin/2022/October/Publication/PanelPublicationOctober";
import PanelpwiOctober from "./components/Admin/2022/October/PWI/PanelPWIOctober";
import PanelpwpOctober from "./components/Admin/2022/October/PWP/PanelPWPOctober";
import BestPartnerBonus from "./components/Bonus/BestPartnerBonus/BestPartnerBonus";
import BestPartnerBonusSuccess from "./components/Bonus/BestPartnerBonus/BestPartnerBonusSuccess";
import Updatee10kPanel from "./components/Admin/UpdatePoint/E10k/UpdateE10kPanel";
import UpdateemailPanel from "./components/Admin/UpdatePoint/Email/UpdateEmailPanel";
import UpdatelikescommentPanel from "./components/Admin/UpdatePoint/LikesComment/UpdateLikesCommentPanel";
import Updatem10kPanel from "./components/Admin/UpdatePoint/M10k/UpdateM10kPanel";
import UpdatemessagePanel from "./components/Admin/UpdatePoint/Message/UpdateMessagePanel";
import UpdatemwiPanel from "./components/Admin/UpdatePoint/MWI/UpdateMWIPanel";
import UpdatepublicationPanel from "./components/Admin/UpdatePoint/Publication/UpdatePublicationPanel";
import UpdatelikespublicationPanel from "./components/Admin/UpdatePoint/LikesPublication/UpdateLikesPublicationPanel";
import UpdatepwpPanel from "./components/Admin/UpdatePoint/PWP/UpdatePWPPanel";
import UpdatepwiPanel from "./components/Admin/UpdatePoint/PWI/UpdatePWIPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<ContactPartner />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/politique" element={<Politique />} />

        <Route path="/akoua" element={<AkouaDjenebou />} />
        <Route path="/akoua-home" element={<AkouaHome />} />
        <Route path="/akoua-menu" element={<AkouaNavMenu />} />
        <Route path="/akoua-trans" element={<AkouaTrans />} />
        <Route path="/akoua-contact" element={<AkouaContactAction />} />
        <Route path="/akoua-all-histo" element={<AkouaAllHisto />} />
        <Route path="/akoua-histo-one" element={<AkouaHistoOne />} />
        <Route path="/akoua-histo-two" element={<AkouaHistoTwo />} />
        <Route path="/akoua-histo-three" element={<AkouaHistoThree />} />
        <Route path="/akoua-histo-four" element={<AkouaHistoFour />} />
        <Route path="/akoua-histo-five" element={<AkouaHistoFive />} />
        <Route path="/akoua-histo-six" element={<AkouaHistoSix />} />
        <Route path="/akoua-histo-seven" element={<AkouaHistoSeven />} />
        <Route path="/akoua-histo-eight" element={<AkouaHistoEight />} />
        <Route path="/akoua-histo-nine" element={<AkouaHistoNine />} />
        <Route path="/akoua-histo-ten" element={<AkouaHistoTen />} />
        <Route path="/akoua-histo-eleven" element={<AkouaHistoEleven />} />
        <Route path="/akoua-histo-twelve" element={<AkouaHistoTwelve />} />
        <Route path="/akoua-histo-thirty" element={<AkouaHistoThirty />} />
        <Route path="/akoua-histo-fourteen" element={<AkouaHistoFourteen />} />
        <Route path="/akoua-histo-fifteen" element={<AkouaHistoFifteen />} />
        <Route path="/akoua-histo-sixteen" element={<AkouaHistoSixteen />} />
        <Route path="/akoua-histo-eighteen" element={<AkouaHistoEighteen />} />
        <Route path="/akoua-histo-nineteen" element={<AkouaHistoNineteen />} />
        <Route path="/akoua-histo-twenty" element={<AkouaHistoTwenty />} />
        <Route
          path="/akoua-histo-seventeen"
          element={<AkouaHistoSeventeen />}
        />
        <Route path="/akoua-stats" element={<AkouaStats />} />

        <Route path="/partner-home" element={<PartnerHome />} />
        <Route path="/partner-menu" element={<PartnerNavMenu />} />
        <Route path="/partner-contact" element={<PartnerContact />} />
        <Route path="/partner-trans" element={<PartnerTrans />} />
        <Route path="/partner-historical" element={<PartnerHistorical />} />

        <Route path="/settings" element={<PartnerSettings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/after-login" element={<AfterLogin />} />
        <Route path="/after-signup" element={<AfterSignup />} />
        <Route path="/partner" element={<AfterLoginSuccess />} />
        <Route path="/menu" element={<NavMenu />} />
        <Route path="/secure-comment" element={<SecureComment />} />
        <Route path="/secure-like" element={<SecureLike />} />
        <Route path="/secure-email" element={<SecureEmail />} />
        <Route
          path="/secure-like-publication"
          element={<SecureLikePublication />}
        />
        <Route path="/secure-like-comment" element={<SecureLikeComment />} />
        <Route path="/secure-m10k" element={<SecureM10k />} />
        <Route path="/secure-message" element={<SecureMessage />} />
        <Route path="/secure-mwi" element={<SecureMWI />} />
        <Route path="/secure-publication" element={<SecurePublication />} />
        <Route path="/secure-pwi" element={<SecurePWI />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/secure-reset-password" element={<SecureNewPassword />} />
        <Route path="/after-new-password" element={<AfterNewPassword />} />
        <Route path="/update" element={<Update />} />
        <Route path="/update-success" element={<UpdateSuccess />} />
        <Route path="/secure-update" element={<SecureUpdate />} />
        <Route path="/secure-menu" element={<SecureNavigation />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/secure-logout-confirm"
          element={<SecureLogoutConfirm />}
        />
        <Route path="/after-logout" element={<AfterLogout />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/infos-update" element={<InfosUpdate />} />
        <Route path="/infos-update-success" element={<InfosUpdateSuccess />} />
        <Route path="/after-welcome-bonus" element={<AfterWelcomeBonus />} />
        <Route path="/secure-welcome-bonus" element={<SecureWelcomeBonus />} />

        <Route path="/secure-infos-update" element={<SecureInfosUpdate />} />
        <Route path="/panel-kdvb" element={<HomePanel />} />
        <Route path="/panel-kdvb-user" element={<User />} />
        <Route
          path="/panel-kdvb-comment-october-2022"
          element={<PanelCommentOctober />}
        />
        <Route
          path="/panel-kdvb-e10k-october-2022"
          element={<Panele10kOctober />}
        />
        <Route
          path="/panel-kdvb-email-october-2022"
          element={<PanelemailOctober />}
        />
        <Route
          path="/panel-kdvb-likescomment-october-2022"
          element={<PanellikescommentOctober />}
        />
        <Route
          path="/panel-kdvb-likespublication-october-2022"
          element={<PanellikespublicationOctober />}
        />
        <Route
          path="/panel-kdvb-m10k-october-2022"
          element={<Panelm10kOctober />}
        />
        <Route
          path="/panel-kdvb-message-october-2022"
          element={<PanelmessageOctober />}
        />
        <Route
          path="/panel-kdvb-mwi-october-2022"
          element={<PanelmwiOctober />}
        />
        <Route
          path="/panel-kdvb-publication-october-2022"
          element={<PanelpublicationOctober />}
        />
        <Route
          path="/panel-kdvb-pwi-october-2022"
          element={<PanelpwiOctober />}
        />
        <Route
          path="/panel-kdvb-pwp-october-2022"
          element={<PanelpwpOctober />}
        />

        <Route
          path="/panel-kdvb-welcome-bonus"
          element={<WelcomeBonusPanel />}
        />
        <Route
          path="/panel-kdvb-update-comment-2022"
          element={<UpdateCommentPanel />}
        />

        <Route
          path="/panel-kdvb-update-e10k-2022"
          element={<Updatee10kPanel />}
        />

        <Route
          path="/panel-kdvb-update-email-2022"
          element={<UpdateemailPanel />}
        />

        <Route
          path="/panel-kdvb-update-likescomment-2022"
          element={<UpdatelikescommentPanel />}
        />

        <Route
          path="/panel-kdvb-update-likespublication-2022"
          element={<UpdatelikespublicationPanel />}
        />

        <Route
          path="/panel-kdvb-update-m10k-2022"
          element={<Updatem10kPanel />}
        />

        <Route
          path="/panel-kdvb-update-message-2022"
          element={<UpdatemessagePanel />}
        />

        <Route
          path="/panel-kdvb-update-mwi-2022"
          element={<UpdatemwiPanel />}
        />

        <Route
          path="/panel-kdvb-update-publication-2022"
          element={<UpdatepublicationPanel />}
        />

        <Route
          path="/panel-kdvb-update-pwi-2022"
          element={<UpdatepwiPanel />}
        />

        <Route
          path="/panel-kdvb-update-pwp-2022"
          element={<UpdatepwpPanel />}
        />

        <Route path="/update-point" element={<UpdatePoint />} />
        <Route path="/update-point-success" element={<UpdatePointSuccess />} />
        <Route
          path="/secure-update-comment"
          element={<SecureUpdateComment />}
        />

        <Route path="/secure-update-e10k" element={<SecureUpdateE10k />} />

        <Route path="/secure-update-email" element={<SecureUpdateEmail />} />

        <Route
          path="/secure-update-likescomment"
          element={<SecureUpdateLikesComment />}
        />

        <Route
          path="/secure-update-likespublication"
          element={<SecureUpdateLikesPublication />}
        />

        <Route path="/secure-update-m10k" element={<SecureUpdateM10k />} />

        <Route
          path="/secure-update-message"
          element={<SecureUpdateMessage />}
        />

        <Route path="/secure-update-mwi" element={<SecureUpdateMWI />} />

        <Route
          path="/secure-update-publication"
          element={<SecureUpdatePublication />}
        />

        <Route path="/secure-update-pwi" element={<SecureUpdatePWI />} />

        <Route path="/secure-update-pwp" element={<SecureUpdatePWP />} />

        <Route
          path="/days-of-generosity-success"
          element={<DaysOfGenerositySuccess />}
        />

        <Route
          path="/secure-days-of-generosity"
          element={<SecureDaysOfGenerosity />}
        />

        <Route path="/best-partner-bonus" element={<BestPartnerBonus />} />

        <Route
          path="/best-partner-bonus-success"
          element={<BestPartnerBonusSuccess />}
        />

        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
  );
}

/* 

REACT_APP_OMISIFY_API = https://omisify-api.onrender.com

 */
