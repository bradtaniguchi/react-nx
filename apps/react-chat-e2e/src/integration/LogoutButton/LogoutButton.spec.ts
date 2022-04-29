describe('react-chat: LogoutButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logoutbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LogoutButton!');
    });
});
