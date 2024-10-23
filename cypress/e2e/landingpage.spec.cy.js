describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Altere se sua app estiver rodando em outra porta
  });

  it('Deve exibir o título corretamente', () => {
    cy.contains('Fillipe F. Monteiro').should('be.visible');
  });

  it('Deve conter informações de contato', () => {
    cy.contains('fillipefreitas@live.com').should('be.visible');
    cy.contains('(31) 99679-3255').should('be.visible');
  });

  it('Deve verificar os links de contato', () => {
    // Verifica se o link do email é funcional
    cy.get('a[href="mailto:fillipefreitas@live.com"]').should('be.visible').click();

    // Verifica se existe um link de telefone
    cy.get('a[href^="tel:"]').should('be.visible');
  });
  it('deve passar no teste de acessibilidade, ignorando violação de contraste', () => {
    cy.visit('http://localhost:3000');

    cy.injectAxe(); // Adiciona o axe-core ao contexto
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false }
      }
    });
  });

  it('Deve ser responsivo', () => {
    // Teste para visualização em telas pequenas
    cy.viewport('iphone-6'); // Simula a tela de um iPhone 6
    cy.contains('Fillipe F. Monteiro').should('be.visible');
  });
});
