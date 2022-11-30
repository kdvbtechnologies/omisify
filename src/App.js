import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";

// home
import Home from "./components/Home/Home";
import Influencer from "./components/Home/E.Influencer";
import NoInfluencer from "./components/Home/F.NoInfluencer";
import HomeBonus from "./components/Home/AfterMore/Bonus/HomeBonus";
import HomeOmisify from "./components/Home Omisify/Home";

import ContactPartner from "./Pages/ContactPartner";
import Program from "./components/Program";
import PartnerNavMenu from "./components/Partenaire Omisify/PartnerNavMenu";
import PartnerHome from "./components/Partenaire Omisify/PartnerHome";
import PartnerContact from "./components/Partenaire Omisify/PartnerContact";
import PartnerTrans from "./components/Partenaire Omisify/PartnerTrans";
import PartnerHistorical from "./components/Partenaire Omisify/PartnerHistorical";

// bonus
import ContactConfiance from "./components/Bonus/ContactConfiance/ContactConfiance";

// dev
import Dev from "./components/Others/Dev/Dev";
import AfterDev from "./components/Others/Dev/AfterDev";
import Complete from "./components/Others/Dev/Complete";
import Incomplete from "./components/Others/Dev/Incomplete";

// AccessCode
import ValidateAccessCode from "./components/Others/AccessCode/ValidateAccessCode";
import ErrorAccessCode from "./components/Others/AccessCode/ErrorAccessCode";
import AfterAccessCode from "./components/Others/AccessCode/AfterAccessCode";
import SecureAccessCode from "./components/Others/AccessCode/SecureAccessCode";
import Prices from "./components/Business/Home/Prices/Prices";
import Test from "./components/Test";
import Translation from "./components/Translation/Translation";

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

import InfosUpdate from "./components/Settings/InfosUpdate";
import InfosUpdateSuccess from "./components/Settings/InfosUpdateSuccess";

// bonus
import SecureWelcomeBonus from "./components/Bonus/WelcomeBonus/SecureWelcomeBonus";
import AfterWelcomeBonus from "./components/Bonus/WelcomeBonus/AfterWelcomeBonus";
import Bonus from "./components/Bonus/Bonus";
import SecureDaysOfGenerosity from "./components/Bonus/DaysOfGenerosity/SecureDaysOfGenerosity";
import DaysOfGenerositySuccess from "./components/Bonus/DaysOfGenerosity/DaysOfGenerositySuccess";

// others
import Others from "./components/Others/Others";
import Guide from "./components/Others/Guide/Guide";
import Vocabulary from "./components/Others/Vocabulary/Vocabulary";
import AuthSignup from "./components/AuthSignup";
import AskPoster from "./components/Others/Ask/AskPoster";
import AskPosterSuccess from "./components/Others/Ask/AskPosterSuccess";

// program
import ProgramAffiliation from "./components/Program/ProgramAffiliation";

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

// updatepoint - BestPartnerBonus
import CalculBestPartnerBonus from "./components/UpdatePoint/October/Bonus/BestPartnerBonus/CalculBestPartnerBonus";
import BeforeCalculBestPartnerBonus from "./components/UpdatePoint/October/Bonus/BestPartnerBonus/BeforeCalculBestPartnerBonus";
import ValidateCalculBestPartnerBonus from "./components/UpdatePoint/October/Bonus/BestPartnerBonus/ValidateCalculBestPartnerBonus";
import ValidateBestPartnerBonusError from "./components/UpdatePoint/October/Bonus/BestPartnerBonus/ValidateBestPartnerBonusError";
import ValidateBestPartnerBonusSuccess from "./components/UpdatePoint/October/Bonus/BestPartnerBonus/ValidateBestPartnerBonusSuccess";

// updatepoint - comment
import CalculComment from "./components/UpdatePoint/October/Comment/CalculComment";
import ValidateCalculComment from "./components/UpdatePoint/October/Comment/ValidateCalculComment";
import ValidateCommentSuccess from "./components/UpdatePoint/October/Comment/ValidateCommentSuccess";
import ValidateCommentError from "./components/UpdatePoint/October/Comment/ValidateCommentError";
import BeforeCalculComment from "./components/UpdatePoint/October/Comment/BeforeCalculComment";

// updatepoint - LikesComment
import CalculLikesComment from "./components/UpdatePoint/October/LikesComment/CalculLikesComment";
import BeforeCalculLikesComment from "./components/UpdatePoint/October/LikesComment/BeforeCalculLikesComment";
import ValidateCalculLikesComment from "./components/UpdatePoint/October/LikesComment/ValidateCalculLikesComment";
import ValidateLikesCommentError from "./components/UpdatePoint/October/LikesComment/ValidateLikesCommentError";
import ValidateLikesCommentSuccess from "./components/UpdatePoint/October/LikesComment/ValidateLikesCommentSuccess";

// updatepoint - LikesPublication
import CalculLikesPublication from "./components/UpdatePoint/October/LikesPublication/CalculLikesPublication";
import BeforeCalculLikesPublication from "./components/UpdatePoint/October/LikesPublication/BeforeCalculLikesPublication";
import ValidateCalculLikesPublication from "./components/UpdatePoint/October/LikesPublication/ValidateCalculLikesPublication";
import ValidateLikesPublicationError from "./components/UpdatePoint/October/LikesPublication/ValidateLikesPublicationError";
import ValidateLikesPublicationSuccess from "./components/UpdatePoint/October/LikesPublication/ValidateLikesPublicationSuccess";

// updatepoint - m10k
import CalculM10k from "./components/UpdatePoint/October/M10k/CalculM10k";
import BeforeCalculM10k from "./components/UpdatePoint/October/M10k/BeforeCalculM10k";
import ValidateCalculM10k from "./components/UpdatePoint/October/M10k/ValidateCalculM10k";
import ValidateM10kError from "./components/UpdatePoint/October/M10k/ValidateM10kError";
import ValidateM10kSuccess from "./components/UpdatePoint/October/M10k/ValidateM10kSuccess";

// updatepoint - E10k
// updatepoint - E10k
// updatepoint - E10k
// updatepoint - E10k
// updatepoint - E10k
// updatepoint - E10k
import CalculE10k from "./components/UpdatePoint/October/E10k/CalculE10k";
import BeforeCalculE10k from "./components/UpdatePoint/October/E10k/BeforeCalculE10k";
import ValidateCalculE10k from "./components/UpdatePoint/October/E10k/ValidateCalculE10k";
import ValidateE10kError from "./components/UpdatePoint/October/E10k/ValidateE10kError";
import ValidateE10kSuccess from "./components/UpdatePoint/October/E10k/ValidateE10kSuccess";

// updatepoint - message
// updatepoint - message
// updatepoint - message
// updatepoint - message
// updatepoint - message
// updatepoint - message
// updatepoint - message
// updatepoint - message
import ValidateMessageError from "./components/UpdatePoint/October/Message/ValidateMessageError";
import ValidateMessageSuccess from "./components/UpdatePoint/October/Message/ValidateMessageSuccess";
import ValidateCalculMessage from "./components/UpdatePoint/October/Message/ValidateCalculMessage";
import CalculMessage from "./components/UpdatePoint/October/Message/CalculMessage";
import BeforeCalculMessage from "./components/UpdatePoint/October/Message/BeforeCalculMessage";

// updatepoint - MWI
// updatepoint - MWI
// updatepoint - MWI
// updatepoint - MWI
// updatepoint - MWI
// updatepoint - MWI
import CalculMWI from "./components/UpdatePoint/October/MWI/CalculMWI";
import BeforeCalculMWI from "./components/UpdatePoint/October/MWI/BeforeCalculMWI";
import ValidateCalculMWI from "./components/UpdatePoint/October/MWI/ValidateCalculMWI";
import ValidateMWIError from "./components/UpdatePoint/October/MWI/ValidateMWIError";
import ValidateMWISuccess from "./components/UpdatePoint/October/MWI/ValidateMWISuccess";

// updatepoint - publication
// updatepoint - publication
// updatepoint - publication
// updatepoint - publication
// updatepoint - publication
// updatepoint - publication
// updatepoint - publication
import ValidatePublicationError from "./components/UpdatePoint/October/Publication/ValidatePublicationError";
import ValidatePublicationSuccess from "./components/UpdatePoint/October/Publication/ValidatePublicationSuccess";
import ValidateCalculpublication from "./components/UpdatePoint/October/Publication/ValidateCalculPublication";
import CalculPublication from "./components/UpdatePoint/October/Publication/CalculPublication";
import BeforeCalculPublication from "./components/UpdatePoint/October/Publication/BeforeCalculPublication";

// panel
import User from "./components/Admin/User/User";
import HomePanel from "./components/Admin/HomePanel";

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

// panel update point
// panel update point
// panel update point
import UpdatePointPanel from "./components/Admin/UpdatePoint/UpdatePointPanel";

// navigation
import NavMenuPanel from "./components/Admin/Navigation/NavMenuPanel";

// others in panel
import OthersPanel from "./components/Admin/Bonus/OthersPanel";

// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
// Jamelfase
import HomeJA from "./components/Business/Home Jamelfase/HomeJA";
import ProfilJA from "./components/Business/Profil/Profil";
import SignupSuccessJA from "./components/Business/Auth/SignupSuccess";
import StatsJA from "./components/Business/Stats/Stats";

import HomeB from "./components/Business/Home/HomeB";
import AdsHomeB from "./components/Business/Home/AdsHome/AdsHomeB";
import MenuB from "./components/Business/Home/Navigation/MenuB";
import CreateaAd from "./components/Business/AdsManager/CreateaAd";
import SignupFirst from "./components/Business/AdsManager/SignupFirst";

import RealTimeResults from "./components/Business/AdsManager/RealTimeResults";
import OmisifyPartnerRealTimeResults from "./components/Business/AdsManager/OmisifyPartner/OmisifyPartnerRealTimeResults";
import OmisifyPartnerRealTimeResultsDetailsByDay from "./components/Business/AdsManager/OmisifyPartner/OmisifyPartnerRealTimeResultsDetailsByDay";
import AdMenu from "./components/Business/AdsManager/AdMenu";
import ChooseaAd from "./components/Business/AdsManager/ChooseaAd";

import SignupJA from "./components/Business/Auth/Signup";
import LoginJA from "./components/Business/Auth/Login";
import ForgotPasswordJA from "./components/Business/Auth/ForgotPassword";
import NewPasswordJA from "./components/Business/Auth/NewPassword";
import NewPasswordSuccessJA from "./components/Business/Auth/NewPasswordSuccess";
import LoginSuccessJA from "./components/Business/Auth/LoginSuccess";

import LogoutConfirmB from "./components/Business/Auth/LogoutConfirm";
import LogoutB from "./components/Business/Auth/Logout";

import Settings from "./components/Business/Settings/Settings";
import SettingsInfos from "./components/Business/Settings/SettingsInfos";
import SettingsInfosUpdate from "./components/Business/Settings/SettingsInfosUpdate";

// admin - business
// admin - business
// admin - business
// admin - business
// admin - business
// admin - business
// admin - business
// admin - business
import AdsManagerPanel from "./components/Admin/Business/AdsManager/AdsManagerPanel";
import Geolocation from "./components/Business/Settings/Geolocation";

// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
// alrani
import NavbarAl from "./components/Alrani/Navigation/Navbar";
import HomeAl from "./components/Alrani/Home/Home";
import OneBook from "./components/Alrani/Home/OneBook";
import PageCommentBookFiveStars from "./components/Alrani/Home/Comment/PageCommentBookFiveStars";
import MoreBookPage from "./components/Alrani/Home/MoreBookPage";
import CommentBookAll from "./components/Alrani/Home/CommentBookAll";

import ProfilAl from "./components/Alrani/Profil/Profil";
import LoginSuccessAl from "./components/Alrani/Auth/LoginSuccess";
import SignupSuccessAl from "./components/Alrani/Auth/SignupSuccess";

import LogoutAl from "./components/Alrani/Auth/Logout";
import SignupAl from "./components/Alrani/Auth/Signup";
import LoginAl from "./components/Alrani/Auth/Login";
import ForgotPasswordAl from "./components/Alrani/Auth/ForgotPassword";
import NewPasswordAl from "./components/Alrani/Auth/NewPassword";
import NewPasswordSuccessAl from "./components/Alrani/Auth/NewPasswordSuccess";

import ProfilPartnerAl from "./components/Alrani/Partner/Profil/Profil";

import LoginPartnerAl from "./components/Alrani/Partner/LoginPartner";
import LoginSuccessPartnerAl from "./components/Alrani/Partner/LoginSuccessPartner";
import SignupPartnerAl from "./components/Alrani/Partner/SignupPartner";
import SignupSuccessPartnerAl from "./components/Alrani/Partner/SignupSuccessPartner";

import ForgotPasswordPartnerAl from "./components/Alrani/Partner/ForgotPassword";
import NewPasswordPartnerAl from "./components/Alrani/Partner/NewPassword";
import NewPasswordSuccessPartnerAl from "./components/Alrani/Partner/NewPasswordSuccess";

// inizel
// inizel
// inizel
// inizel
// inizel-
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
// inizel
import ProfilIN from "./components/0Inizel/Profil/Profil";
import LogoutIn from "./components/0Inizel/Auth/Logout";
import LogoutConfirmIN from "./components/0Inizel/Auth/LogoutConfirm";
import SignupIN from "./components/0Inizel/Auth/Signup";
import HomeIN from "./components/0Inizel/Home/Home";
import SearchResultHomeIN from "./components/0Inizel/Home/SearchResult/SearchResultHome";

// encyclodata
// encyclodata
// encyclodata
import ResultEncyclodata from "./components/0Inizel/Home/Encyclodata/Result/ResultEncyclodata";

// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
// vixinol
import ProfilVI from "./components/0Vixinol/Profil/Profil";
import LogoutVi from "./components/0Vixinol/Auth/Logout";
import LogoutConfirmVI from "./components/0Vixinol/Auth/LogoutConfirm";
import SignupVI from "./components/0Vixinol/Auth/Signup";
import SignupSuccessVI from "./components/0Vixinol/Auth/SignupSuccess";
import LoginVI from "./components/0Vixinol/Auth/Login";
import LoginSuccessVI from "./components/0Vixinol/Auth/LoginSuccess";
import ForgotPasswordVI from "./components/0Vixinol/Auth/ForgotPassword";
import NewPasswordVI from "./components/0Vixinol/Auth/NewPassword";
import NewPasswordSuccessVI from "./components/0Vixinol/Auth/NewPasswordSuccess";
import HomeUserVI from "./components/0Vixinol/HomeUser/Home";
import ProfilApp from "./components/0Vixinol/HomeUser/ProfilApp";
import PageDownloadAppVI from "./components/0Vixinol/HomeUser/PageDownloadApp";

import SignupPartnerVI from "./components/0Vixinol/Partner/Auth/SignupPartner";
import SignupSuccessPartnerVI from "./components/0Vixinol/Partner/Auth/SignupSuccess";
import LoginPartnerVI from "./components/0Vixinol/Partner/Auth/LoginPartner";
import LoginSuccessPartnerVI from "./components/0Vixinol/Partner/Auth/LoginSuccess";
import ForgotPasswordPartnerVI from "./components/0Vixinol/Partner/Auth/ForgotPasswordPartner";
import NewPasswordPartnerVI from "./components/0Vixinol/Partner/Auth/NewPassword";
import NewPasswordSuccessPartnerVI from "./components/0Vixinol/Partner/Auth/NewPasswordSuccess";
import ProfilPartnerVS from "./components/0Vixinol/Partner/Profil/Profil";
import StoreDev from "./components/0Vixinol/HomeUser/StoreDev/StoreDev";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/translation" element={<Translation />} />
        <Route path="/validate-access-code" element={<ValidateAccessCode />} />
        <Route path="/error-access-code" element={<ErrorAccessCode />} />
        <Route path="/after-access-code" element={<AfterAccessCode />} />
        <Route path="/secure-access-code" element={<SecureAccessCode />} />

        <Route path="/test" element={<Test />} />
        <Route path="/incomplete" element={<Incomplete />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/after-dev" element={<AfterDev />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        {/* new Omisify */}
        <Route path="/home-omisify" element={<HomeOmisify />} />
        <Route path="/" element={<Home />} />
        <Route path="/influential-omisify-partner" element={<Influencer />} />
        <Route path="/omisify-partner" element={<NoInfluencer />} />
        <Route path="/home-bonus" element={<HomeBonus />} />
        <Route path="/contact-confiance" element={<ContactConfiance />} />

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
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/others" element={<Others />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/ask-poster" element={<AskPoster />} />
        <Route path="/ask-poster-success" element={<AskPosterSuccess />} />

        <Route
          path="/before-calcul-best-partner-bonus"
          element={<BeforeCalculBestPartnerBonus />}
        />
        <Route
          path="/calcul-best-partner-bonus"
          element={<CalculBestPartnerBonus />}
        />
        <Route
          path="/validate-calcul-best-partner-bonus"
          element={<ValidateCalculBestPartnerBonus />}
        />
        <Route
          path="/validate-best-partner-bonus-success"
          element={<ValidateBestPartnerBonusSuccess />}
        />
        <Route
          path="/validate-best-partner-bonus-error"
          element={<ValidateBestPartnerBonusError />}
        />

        <Route
          path="/before-calcul-comment"
          element={<BeforeCalculComment />}
        />

        <Route path="/calcul-comment" element={<CalculComment />} />

        <Route
          path="/validate-calcul-comment"
          element={<ValidateCalculComment />}
        />
        <Route
          path="/validate-comment-success"
          element={<ValidateCommentSuccess />}
        />
        <Route
          path="/validate-comment-error"
          element={<ValidateCommentError />}
        />

        <Route path="/before-calcul-m10k" element={<BeforeCalculM10k />} />
        <Route path="/calcul-m10k" element={<CalculM10k />} />
        <Route path="/validate-calcul-m10k" element={<ValidateCalculM10k />} />
        <Route
          path="/validate-m10k-success"
          element={<ValidateM10kSuccess />}
        />
        <Route path="/validate-m10k-error" element={<ValidateM10kError />} />

        <Route path="/before-calcul-e10k" element={<BeforeCalculE10k />} />
        <Route path="/calcul-e10k" element={<CalculE10k />} />
        <Route path="/validate-calcul-e10k" element={<ValidateCalculE10k />} />
        <Route
          path="/validate-e10k-success"
          element={<ValidateE10kSuccess />}
        />
        <Route path="/validate-e10k-error" element={<ValidateE10kError />} />

        <Route
          path="/before-calcul-likes-comment"
          element={<BeforeCalculLikesComment />}
        />
        <Route path="/calcul-likes-comment" element={<CalculLikesComment />} />
        <Route
          path="/validate-calcul-likes-comment"
          element={<ValidateCalculLikesComment />}
        />
        <Route
          path="/validate-likes-comment-success"
          element={<ValidateLikesCommentSuccess />}
        />
        <Route
          path="/validate-likes-comment-error"
          element={<ValidateLikesCommentError />}
        />

        <Route
          path="/before-calcul-likes-publication"
          element={<BeforeCalculLikesPublication />}
        />
        <Route
          path="/calcul-likes-publication"
          element={<CalculLikesPublication />}
        />
        <Route
          path="/validate-calcul-likes-publication"
          element={<ValidateCalculLikesPublication />}
        />
        <Route
          path="/validate-likes-publication-success"
          element={<ValidateLikesPublicationSuccess />}
        />
        <Route
          path="/validate-likes-publication-error"
          element={<ValidateLikesPublicationError />}
        />

        {/* update point - message */}
        {/* update point - message */}
        {/* update point - message */}
        {/* update point - message */}
        {/* update point - message */}
        {/* update point - message */}
        <Route
          path="/before-calcul-message"
          element={<BeforeCalculMessage />}
        />
        <Route path="/calcul-message" element={<CalculMessage />} />
        <Route
          path="/validate-calcul-message"
          element={<ValidateCalculMessage />}
        />
        <Route
          path="/validate-message-success"
          element={<ValidateMessageSuccess />}
        />
        <Route
          path="/validate-message-error"
          element={<ValidateMessageError />}
        />

        {/* update point - mwi */}
        {/* update point - mwi */}
        {/* update point - mwi */}
        {/* update point - mwi */}
        {/* update point - mwi */}
        {/* update point - mwi */}
        <Route path="/before-calcul-MWI" element={<BeforeCalculMWI />} />
        <Route path="/calcul-MWI" element={<CalculMWI />} />
        <Route path="/validate-calcul-MWI" element={<ValidateCalculMWI />} />
        <Route path="/validate-MWI-success" element={<ValidateMWISuccess />} />
        <Route path="/validate-MWI-error" element={<ValidateMWIError />} />

        {/* update point - publication */}
        {/* update point - publication */}
        {/* update point - publication */}
        {/* update point - publication */}
        {/* update point - publication */}
        {/* update point - publication */}
        <Route
          path="/before-calcul-publication"
          element={<BeforeCalculPublication />}
        />
        <Route path="/calcul-publication" element={<CalculPublication />} />
        <Route
          path="/validate-calcul-publication"
          element={<ValidateCalculpublication />}
        />
        <Route
          path="/validate-publication-success"
          element={<ValidatePublicationSuccess />}
        />
        <Route
          path="/validate-publication-error"
          element={<ValidatePublicationError />}
        />

        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        {/* program - programAffiliation.js */}
        <Route path="/program-affiliation" element={<ProgramAffiliation />} />

        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
        {/* admin - homepanel.js */}
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

        <Route path="/others-panel" element={<OthersPanel />} />

        <Route path="/update-point-panel" element={<UpdatePointPanel />} />
        <Route path="/nav-menu-panel" element={<NavMenuPanel />} />

        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        {/* Jamelfase */}
        <Route path="/home-ja" element={<HomeJA />} />

        <Route path="/signup-ja" element={<SignupJA />} />
        <Route path="/signup-success-ja" element={<SignupSuccessJA />} />
        <Route path="/login-ja" element={<LoginJA />} />
        <Route path="/login-success-ja" element={<LoginSuccessJA />} />
        <Route path="/new-password-ja" element={<NewPasswordJA />} />
        <Route
          path="/new-password-success-ja"
          element={<NewPasswordSuccessJA />}
        />
        <Route path="/forgot-password-ja" element={<ForgotPasswordJA />} />
        <Route path="/logout-confirmb" element={<LogoutConfirmB />} />
        <Route path="/logoutb" element={<LogoutB />} />

        <Route path="/profil-ja" element={<ProfilJA />} />
        <Route path="/stats-ja" element={<StatsJA />} />
        <Route path="/business" element={<HomeB />} />
        <Route path="/ads-home" element={<AdsHomeB />} />
        <Route path="/omisify-b-menu" element={<MenuB />} />
        <Route path="/create-a-ad" element={<CreateaAd />} />
        <Route path="/real-time-results" element={<RealTimeResults />} />
        <Route path="/ad-menu" element={<AdMenu />} />
        <Route path="/choose-a-ad" element={<ChooseaAd />} />

        <Route path="/settingsb" element={<Settings />} />
        <Route path="/settings-infos" element={<SettingsInfos />} />

        <Route
          path="/settings-infos-update"
          element={<SettingsInfosUpdate />}
        />
        <Route path="/geolocation" element={<Geolocation />} />

        <Route
          path="/omisify-partner-real-time-results"
          element={<OmisifyPartnerRealTimeResults />}
        />

        <Route
          path="/omisify-partner-real-time-results-details-by-day"
          element={<OmisifyPartnerRealTimeResultsDetailsByDay />}
        />

        <Route path="/prices" element={<Prices />} />
        <Route path="/signup-first" element={<SignupFirst />} />

        {/* admin - business - ads manager */}
        {/* admin - business - ads manager */}
        {/* admin - business - ads manager */}
        {/* admin - business - ads manager */}
        {/* admin - business - ads manager */}
        {/* admin - business - ads manager */}
        <Route path="/ads-manager-panel" element={<AdsManagerPanel />} />

        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        {/* alrani */}
        <Route path="/navbar-al" element={<NavbarAl />} />
        <Route path="/home-al" element={<HomeAl />} />
        <Route path="/book" element={<OneBook />} />
        <Route path="/more-book" element={<MoreBookPage />} />
        <Route path="/comment-book" element={<PageCommentBookFiveStars />} />
        <Route path="/all-comment-book" element={<CommentBookAll />} />
        <Route path="/profil-al" element={<ProfilAl />} />
        <Route path="/login-success-al" element={<LoginSuccessAl />} />
        <Route path="/signup-success-al" element={<SignupSuccessAl />} />

        <Route path="/logout-al" element={<LogoutAl />} />
        <Route path="/signup-al" element={<SignupAl />} />
        <Route path="/login-al" element={<LoginAl />} />
        <Route path="/forgot-password-al" element={<ForgotPasswordAl />} />
        <Route path="/new-password-al" element={<NewPasswordAl />} />
        <Route
          path="/new-password-success-al"
          element={<NewPasswordSuccessAl />}
        />

        <Route path="/login-partner-al" element={<LoginPartnerAl />} />
        <Route path="/signup-partner-al" element={<SignupPartnerAl />} />
        <Route path="/profil-partner-al" element={<ProfilPartnerAl />} />
        <Route
          path="/signup-success-partner-al"
          element={<SignupSuccessPartnerAl />}
        />
        <Route
          path="/login-success-partner-al"
          element={<LoginSuccessPartnerAl />}
        />

        <Route
          path="/forgot-password-partner-al"
          element={<ForgotPasswordPartnerAl />}
        />
        <Route
          path="/new-password-partner-al"
          element={<NewPasswordPartnerAl />}
        />
        <Route
          path="/new-password-success-partner-al"
          element={<NewPasswordSuccessPartnerAl />}
        />

        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        {/* inizel */}
        <Route path="/profil-in" element={<ProfilIN />} />
        <Route path="/logout-in" element={<LogoutIn />} />
        <Route path="/logout-confirm-in" element={<LogoutConfirmIN />} />
        <Route path="/signup-in" element={<SignupIN />} />
        <Route path="/home-in" element={<HomeIN />} />
        <Route path="/search-result-home-in" element={<SearchResultHomeIN />} />

        {/* encyclodata */}
        {/* encyclodata */}
        {/* encyclodata */}
        {/* encyclodata */}
        {/* encyclodata */}
        <Route path="/result-encyclodata" element={<ResultEncyclodata />} />

        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        {/* vixinol */}
        <Route path="/page-download-app" element={<PageDownloadAppVI />} />
        <Route path="/store-dev" element={<StoreDev />} />
        <Route path="/profil-app" element={<ProfilApp />} />
        <Route path="/profil-vi" element={<ProfilVI />} />
        <Route path="/profil-partner-vs" element={<ProfilPartnerVS />} />
        <Route path="/logout-vi" element={<LogoutVi />} />
        <Route path="/logout-confirm-vi" element={<LogoutConfirmVI />} />
        <Route path="/signup-vi" element={<SignupVI />} />
        <Route path="/signup-success-vi" element={<SignupSuccessVI />} />
        <Route path="/login-vi" element={<LoginVI />} />
        <Route path="/login-success-vi" element={<LoginSuccessVI />} />
        <Route path="/forgot-password-vi" element={<ForgotPasswordVI />} />
        <Route path="/new-password-vi" element={<NewPasswordVI />} />
        <Route
          path="/new-password-success-vi"
          element={<NewPasswordSuccessVI />}
        />
        <Route path="/home-user-vi" element={<HomeUserVI />} />

        <Route path="/login-partner-vi" element={<LoginPartnerVI />} />
        <Route
          path="/login-success-partner-vi"
          element={<LoginSuccessPartnerVI />}
        />
        <Route path="/signup-partner-vi" element={<SignupPartnerVI />} />
        <Route
          path="/signup-success-partner-vi"
          element={<SignupSuccessPartnerVI />}
        />

        <Route
          path="/forgot-password-partner-vi"
          element={<ForgotPasswordPartnerVI />}
        />

        <Route
          path="/new-password-partner-vi"
          element={<NewPasswordPartnerVI />}
        />

        <Route
          path="/new-password-success-partner-vi"
          element={<NewPasswordSuccessPartnerVI />}
        />
      </Routes>
    </BrowserRouter>
  );
}

/* 

REACT_APP_OMISIFY_API = https://omisify-api.onrender.com

REACT_APP_OMISIFY_API = https://famous-peplum-dove.cyclic.app

 */
