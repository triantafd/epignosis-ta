import React from 'react';
/* import { render, fireEvent, waitFor, screen, act } from '@testing-library/react'; */
import UsersList from './component/UsersList';
import UserProfile from './component/UserProfile';
import UserForm from './component/UserForm';
import { LoaderProvider } from './context/loaderContext';
import { render, fireEvent, waitFor, screen } from './test-utils/testing-library-utils'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'

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

describe('UserProfile', () => {
  test('Render user profile with correct data', () => {
    const user = {
      "id": "5c093af1aeca1bb00607fb2a",
      "photo": "https://randomuser.me/api/portraits/men/1.jpg",
      "name": "Mollie Oneill",
      "company": "VIAGRAND",
      "email": "mollie.oneill@viagrand.biz",
      "phone": "+1 (852) 535-3880",
      "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
    };

    render(<UserProfile user={user} />);

    const nameElement = screen.getByText('Mollie Oneill');
    const emailElement = screen.getByText('mollie.oneill@viagrand.biz');

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});


describe('UserForm', () => {
  test(`When you click on a user
      1. The right panel should display the corresponding users data within a form.`
    , () => {
      /*     render(<UserForm />, { wrapper: LoaderProvider }); */
      const selectedUser = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneill",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };
      const setUsersMock = jest.fn();

      render(<UserForm selectedUser={selectedUser} setUsers={setUsersMock} />);

      const nameInput = screen.getByLabelText('Name');
      const emailInput = screen.getByLabelText('Email');

      expect(nameInput.value).toBe('Mollie Oneill');
      expect(emailInput.value).toBe('mollie.oneill@viagrand.biz');

    });

  test(`When you edit a users data 
        1.The Save button should be enabled
        2.The Cancel button should appear`,
    async () => {
      /*     render(<UserForm />, { wrapper: LoaderProvider }); */
      const selectedUser = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneill",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };
      const setUsersMock = jest.fn();
      render(<UserForm selectedUser={selectedUser} setUsers={setUsersMock} />);
      //At first Save btn is disabled and cancel btn is not in document
      const saveButton = screen.getByText('Save');
      expect(saveButton).toBeDisabled();
      let cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();


      //User Edits
      const nameInput = screen.getByLabelText('Name');
      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'Mollie Oneilla' } });
      });

      //The Save button gets enabled and Cancel appears
      expect(saveButton).toBeEnabled();
      cancelButton = screen.getByText('Cancel');
      expect(cancelButton).toBeInTheDocument();

    });

  test(`When you click Cancel 
        1.The form fields should reset to its previous saved data(state) 
        2. Cancel button should disappear 
        3.Save button should be disabled`,
    async () => {
      /*     render(<UserForm />, { wrapper: LoaderProvider }); */
      const selectedUser = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneill",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };
      const setUsersMock = jest.fn();

      render(<UserForm selectedUser={selectedUser} setUsers={setUsersMock} />);
      //At first Save btn is disabled and cancel btn is not in document
      let saveButton = screen.getByText('Save');
      expect(saveButton).toBeDisabled();
      let cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();

      //User Edits And then Press Cancel
      const nameInput = screen.getByLabelText('Name');

      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'Mollie Oneilla' } });
      });

      cancelButton = screen.getByText('Cancel');

      await act(async () => {
        fireEvent.click(cancelButton);
      });

      cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();
      expect(saveButton).toBeDisabled();
    });


  test(`When you click Save:
      1. Make an HTTP PUT request with the new user data to the appropriate
      endpoint
      2. Cancel button should disappear
      3. Save button should be disabled`,
    async () => {
      /*     render(<UserForm />, { wrapper: LoaderProvider }); */
      const setUsersMock = jest.fn();
      const selectedUser = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneill",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };

      render(<UserForm selectedUser={selectedUser} setUsers={setUsersMock} />);
      //At first Save btn is disabled and cancel btn is not in document
      const saveButton = screen.getByText('Save');
      expect(saveButton).toBeDisabled();
      let cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();

      //User Edits And then Press Cancel
      const nameInput = screen.getByLabelText('Name');

      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'Mollie Oneilla' } });
        fireEvent.click(saveButton);
      });


      cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();
      expect(saveButton).toBeDisabled();
    });


  test(`When you click Save:
      1. setUsers get Called
      2. fetch function gets called`,
    async () => {
      /*     render(<UserForm />, { wrapper: LoaderProvider }); */
      const setUsersMock = jest.fn();
      const selectedUser = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneill",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };

      const mockResponse = {
        "id": "5c093af1aeca1bb00607fb2a",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "name": "Mollie Oneilla",
        "company": "VIAGRAND",
        "email": "mollie.oneill@viagrand.biz",
        "phone": "+1 (852) 535-3880",
        "address": "120 Cedar Street, Mansfield, Kentucky, 8890"
      };

      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      );

      render(<UserForm selectedUser={selectedUser} setUsers={setUsersMock} />);

      const saveButton = screen.getByText('Save');
      const nameInput = screen.getByLabelText('Name');

      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'Mollie Oneilla' } });
        fireEvent.click(saveButton);
      });

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
          'https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/users/5c093af1aeca1bb00607fb2a',
          expect.objectContaining({
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(mockResponse),
          })
        );
        expect(setUsersMock).toHaveBeenCalledTimes(1);
      });

      global.fetch.mockRestore();
    });

});