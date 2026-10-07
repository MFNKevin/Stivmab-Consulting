import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import PageNotFound from './lib/PageNotFound';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMessages from './pages/admin/AdminMessages';
import AdminConsents from './pages/admin/AdminConsents';
import AdminAuditLogs from './pages/admin/AdminAuditLogs';
import AdminLayout from './components/admin/AdminLayout';
import AdminQRCodes from './pages/admin/AdminQRCodes';
import ServiceAllemand from './pages/ServiceAllemand';
import ServiceMentoring from './pages/ServiceMentoring';
import ServiceImmobilier from './pages/ServiceImmobilier';
import ServiceRetraite from './pages/ServiceRetraite';
import ServiceBusiness from './pages/ServiceBusiness';
import ServiceImmigration from './pages/ServiceImmigration';
import ServiceSystemeAllemand from './pages/ServiceSystemeAllemand';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          } />
          {Object.entries(Pages).map(([path, Page]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <LayoutWrapper currentPageName={path}>
                  <Page />
                </LayoutWrapper>
              }
            />
          ))}
          <Route path="/MentionsLegales" element={<LayoutWrapper currentPageName="MentionsLegales"><MentionsLegales /></LayoutWrapper>} />
          <Route path="/PolitiqueConfidentialite" element={<LayoutWrapper currentPageName="PolitiqueConfidentialite"><PolitiqueConfidentialite /></LayoutWrapper>} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="consents" element={<AdminConsents />} />
            <Route path="audit-logs" element={<AdminAuditLogs />} />
            <Route path="qrcodes" element={<AdminQRCodes />} />
          </Route>
          <Route path="/ServiceAllemand" element={<LayoutWrapper currentPageName="ServiceAllemand"><ServiceAllemand /></LayoutWrapper>} />
          <Route path="/ServiceMentoring" element={<LayoutWrapper currentPageName="ServiceMentoring"><ServiceMentoring /></LayoutWrapper>} />
          <Route path="/ServiceImmobilier" element={<LayoutWrapper currentPageName="ServiceImmobilier"><ServiceImmobilier /></LayoutWrapper>} />
          <Route path="/ServiceRetraite" element={<LayoutWrapper currentPageName="ServiceRetraite"><ServiceRetraite /></LayoutWrapper>} />
          <Route path="/ServiceBusiness" element={<LayoutWrapper currentPageName="ServiceBusiness"><ServiceBusiness /></LayoutWrapper>} />
          <Route path="/ServiceImmigration" element={<LayoutWrapper currentPageName="ServiceImmigration"><ServiceImmigration /></LayoutWrapper>} />
          <Route path="/ServiceSystemeAllemand" element={<LayoutWrapper currentPageName="ServiceSystemeAllemand"><ServiceSystemeAllemand /></LayoutWrapper>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
    </AuthProvider>
  );
}

export default App