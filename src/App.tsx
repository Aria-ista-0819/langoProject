import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ContinueLesson from "./pages/ContinueLesson";
import MarkAsCompleted from "./pages/MarkAsCompleted";
import ContinueLesson2 from "./pages/ContinueLesson2";
import AccountStudy from "./pages/AccountStudy";
import AccountCreate from "./pages/AccountCreate";
import AccountHome from "./pages/AccountHome";
import TwoListVocabCardsBack from "./pages/TwoListVocabCardsBack";
import DosListVocabCards from "./pages/DosListVocabCards";
import OneListVocabCardsBack from "./pages/OneListVocabCardsBack";
import UnoListVocabCards from "./pages/UnoListVocabCards";
import TwoVocabCardsBack from "./pages/TwoVocabCardsBack";
import DosVocabCards from "./pages/DosVocabCards";
import Quiz2FillIn from "./pages/Quiz2FillIn";
import Quiz1Matching from "./pages/Quiz1Matching";
import OneVocabCardsBack from "./pages/OneVocabCardsBack";
import UnoVocabCards from "./pages/UnoVocabCards";
import SearchResults from "./pages/SearchResults";
import JoinGroups from "./pages/JoinGroups";
import CreateCollection from "./pages/CreateCollection";
import AccountExplore from "./pages/AccountExplore";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/continue-lesson":
        title = "";
        metaDescription = "";
        break;
      case "/mark-as-completed":
        title = "";
        metaDescription = "";
        break;
      case "/continue-lesson2":
        title = "";
        metaDescription = "";
        break;
      case "/account-study":
        title = "";
        metaDescription = "";
        break;
      case "/account-create":
        title = "";
        metaDescription = "";
        break;
      case "/account-home":
        title = "";
        metaDescription = "";
        break;
      case "/two-list-vocab-cards-back":
        title = "";
        metaDescription = "";
        break;
      case "/dos-list-vocab-cards":
        title = "";
        metaDescription = "";
        break;
      case "/one-list-vocab-cards-back":
        title = "";
        metaDescription = "";
        break;
      case "/uno-list-vocab-cards":
        title = "";
        metaDescription = "";
        break;
      case "/two-vocab-cards-back":
        title = "";
        metaDescription = "";
        break;
      case "/dos-vocab-cards":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-2-fillin":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-1-matching":
        title = "";
        metaDescription = "";
        break;
      case "/one-vocab-cards-back":
        title = "";
        metaDescription = "";
        break;
      case "/uno-vocab-cards":
        title = "";
        metaDescription = "";
        break;
      case "/search-results":
        title = "";
        metaDescription = "";
        break;
      case "/join-groups":
        title = "";
        metaDescription = "";
        break;
      case "/create-collection":
        title = "";
        metaDescription = "";
        break;
      case "/account-explore":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/continue-lesson" element={<ContinueLesson />} />
      <Route path="/mark-as-completed" element={<MarkAsCompleted />} />
      <Route path="/continue-lesson2" element={<ContinueLesson2 />} />
      <Route path="/account-study" element={<AccountStudy />} />
      <Route path="/account-create" element={<AccountCreate />} />
      <Route path="/account-home" element={<AccountHome />} />
      <Route
        path="/two-list-vocab-cards-back"
        element={<TwoListVocabCardsBack />}
      />
      <Route path="/dos-list-vocab-cards" element={<DosListVocabCards />} />
      <Route
        path="/one-list-vocab-cards-back"
        element={<OneListVocabCardsBack />}
      />
      <Route path="/uno-list-vocab-cards" element={<UnoListVocabCards />} />
      <Route path="/two-vocab-cards-back" element={<TwoVocabCardsBack />} />
      <Route path="/dos-vocab-cards" element={<DosVocabCards />} />
      <Route path="/quiz-2-fillin" element={<Quiz2FillIn />} />
      <Route path="/quiz-1-matching" element={<Quiz1Matching />} />
      <Route path="/one-vocab-cards-back" element={<OneVocabCardsBack />} />
      <Route path="/uno-vocab-cards" element={<UnoVocabCards />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/join-groups" element={<JoinGroups />} />
      <Route path="/create-collection" element={<CreateCollection />} />
      <Route path="/account-explore" element={<AccountExplore />} />
    </Routes>
  );
}
export default App;
