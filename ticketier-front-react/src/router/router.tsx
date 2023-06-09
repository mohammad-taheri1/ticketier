import { lazy, Suspense } from "react";
import CustomSpinner from "../components/spinner/CustomSpinner";
import { Routes, Route, Navigate } from "react-router-dom";

// This is not an optimal import for all pages
// It is better to use lazy loading for our pages

// We converted All Imports to lazy loading

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const TicketsIndexPage = lazy(() => import("../pages/tickets/TicketsIndexPage"));
const TicketsCreatePage = lazy(() => import("../pages/tickets/TicketsCreatePage"));
const TicketsDetailsPage = lazy(() => import("../pages/tickets/TicketsDetailsPage"));
const TicketsEditPage = lazy(() => import("../pages/tickets/TicketsEditPage"));
const TicketsDeletePage = lazy(() => import("../pages/tickets/TicketsDeletePage"));

const GlobalRouter = () => {
   return (
      <Suspense fallback={<CustomSpinner />}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tickets">
               <Route index element={<TicketsIndexPage />} />
               <Route path="create" element={<TicketsCreatePage />} />
               <Route path=":id" element={<TicketsDetailsPage />} />
               <Route path="edit/:id" element={<TicketsEditPage />} />
               <Route path="delete/:id" element={<TicketsDeletePage />} />
            </Route>
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
         </Routes>
      </Suspense>
   );
};

export default GlobalRouter;
