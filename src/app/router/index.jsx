import { createBrowserRouter } from 'react-router-dom';
import { CitySelectPage } from '../../pages/CitySelectPage';
import { CategoriesPage } from '../../pages/CategoriesPage';
import { PropertiesListPage } from '../../pages/PropertiesListPage';
import { PropertyDetailPage } from '../../pages/PropertyDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CitySelectPage />,
  },
  {
    path: '/city/:cityId/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/city/:cityId/category/:categoryId/properties',
    element: <PropertiesListPage />,
  },
  {
    path: '/city/:cityId/category/:categoryId/property/:propertyId',
    element: <PropertyDetailPage />,
  },
]);

