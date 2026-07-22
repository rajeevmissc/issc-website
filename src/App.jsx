import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/CommonComponets/Main';
import Spinner from './components/CommonComponets/Spinner';
import Jobs from "./Pages/Job";

// ✅ Lazy load only "secondary pages"
const HomePage = lazy(() => import("./Pages/Homepage"));
const ServicePage = lazy(() => import("./Pages/Servicespage"));
const AboutusPage = lazy(() => import("./Pages/Aboutuspage"));
const Contactus = lazy(() => import("./Pages/Contactuspage"));
// const BecomePartner = lazy(() => import("./Pages/BecomaPartnerpage"));
const BlogPage = lazy(() => import("./Pages/Blogpage"));
const CulturePage = lazy(() => import("./Pages/Culturepage"));
const QAPage = lazy(() => import("./Pages/QApage"));
const TermConditionsPage = lazy(() => import("./Pages/Termconditionpage"));
const PrivacyPolicy = lazy(() => import("./Pages/Privacypolicypage"));
const DataProtection = lazy(() => import("./Pages/Dataprotectionpage"));
const SignupPage = lazy(() => import("./Pages/Auth/SignupPage"));
const LoginPage = lazy(() => import("./Pages/Auth/LoginPage"));
const Careerpage = lazy(() => import("./Pages/Careerpage"));
const JobDescription = lazy(() => import("./components/CareerpageElements/Positions/JobDescription"));
const Subscribe = lazy(() => import("./Pages/Auth/Suscribe"));
const ServiceDetail = lazy(() => import("./components/ServicespageElements/ServiceDetail"));
const Clients = lazy(() => import('./crm/components/clients/Clients'));
const Analytics = lazy(() => import('./crm/components/analytics/Analytics'));
const Newsletter = lazy(() => import("./newsLetter/Components/Newsletter/Newsletter"));
const SubscribeUsers = lazy(() => import('./crm/components/clients/SubscribeUser'));
const PositionsPage = lazy(() => import("./Pages/Positions"));
const ApplyForm = lazy(() => import("./components/CareerpageElements/Positions/ApplyFrom"));
const TeamDetails = lazy(() => import("./components/HomepageElements/TeamDetails"));
const ExpertInsightDetails = lazy(() => import("./components/HomepageElements/ExpertInsightDetails"));
const CaseStudiesDetails = lazy(() => import("./components/ServicespageElements/CaseStudiesDetails"));
const BlogOverview = lazy(() => import("./components/BlogpageElements/BlogsDetails"));
const GalleryPage = lazy(() => import("./components/CulturepageElements/GalleryPage"));
const GetJobApplication = lazy(() => import("./components/CareerpageElements/Positions/JobApplications"));
const NotFound = lazy(() => import("./Pages/NotFoundPage"));

const App = () => {
  return (
    <Router>
      {/* Suspense only around Routes */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
            <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="about-us" element={<AboutusPage />} />
            <Route path="contact-us" element={<Contactus />} />
            {/* <Route path="become-partner" element={<BecomePartner />} /> */}
            <Route path="blogs" element={<BlogPage />} />
            <Route path="culture" element={<CulturePage />} />
            <Route path="faq" element={<QAPage />} />
            <Route path="term-conditions" element={<TermConditionsPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="data-protection" element={<DataProtection />} />
            <Route path="auth/sign-up" element={<SignupPage />} />
            <Route path="auth/log-in" element={<LoginPage />} />
            <Route path="careers" element={<Careerpage />} />
            <Route path="job-description" element={<JobDescription />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="services/:serviceTitle" element={<ServiceDetail />} />
            <Route path="clients" element={<Clients />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="news-letter" element={<Newsletter />} />
            <Route path="subscribe-user" element={<SubscribeUsers />} />
            <Route path="positions" element={<PositionsPage />} />
            <Route path="apply-form" element={<ApplyForm />} />
            <Route path="team/:id" element={<TeamDetails />} />
            <Route path="insight-overview/:id" element={<ExpertInsightDetails />} />
            <Route path="case-overview/:id" element={<CaseStudiesDetails />} />
            <Route path="blog-overview/:id" element={<BlogOverview />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="job-applications" element={<GetJobApplication />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
