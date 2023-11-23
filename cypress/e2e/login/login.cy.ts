
describe('login test', () => {

    // const login = () => {
    //     const token = mock.credentialToLoginSucess.token;
    //     setLocalProperty("application", token);
    // };
    
    it('should get login', () => {
        cy.visit(`/login`);
        cy.contains('Logue com sua conta Spotify e veja seus Artistar mais ouvidos!').should('be.visible');
        cy.contains('LOGAR').should('be.visible');
        cy.contains('LOGAR').click();
        
        cy.wait(2000);
        cy.url().should('not.eq', '/login');
    });
});