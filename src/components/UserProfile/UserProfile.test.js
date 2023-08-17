import React from 'react';
import UserProfile from './UserProfile';
import { render, screen } from '../../test-utils/testing-library-utils'



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