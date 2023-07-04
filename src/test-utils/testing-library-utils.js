import { render } from '@testing-library/react';
import { LoaderProvider } from '../context/loaderContext';

const renderWithLoaderProvider = (ui, options) => render(ui, { wrapper: LoaderProvider, ...options })

export * from '@testing-library/react'

export { renderWithLoaderProvider as render }