import React from 'react';
import UsersList from './UsersList';
import { render, screen } from '../../test-utils/testing-library-utils'

describe('UsersList', () => {
  test('Show No users when users is empty and loading is false', async () => {
    const setSelectedUser = jest.fn();
    const users = [];
    const isLoading = false

    render(<UsersList users={users} isLoading={isLoading} setSelectedUser={setSelectedUser} />);

    const paragraph = screen.getByText('No users');
    expect(paragraph).toBeInTheDocument();
  })

  test('Show loading spinner when loading is true', () => {
    const setSelectedUser = jest.fn();
    const users = [];
    const isLoading = true;

    render(<UsersList users={users} isLoading={isLoading} setSelectedUser={setSelectedUser} />);

    const loadingSpinner = screen.getByTestId('custom-loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});