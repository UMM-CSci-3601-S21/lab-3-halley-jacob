import { TodoListPage } from '../support/todo-list.po';

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct title', () => {
    page.getTodoTitle().should('have.text', 'Todos');
  });

  it('Should type something in the owner filter and check that it returned correct elements', () => {
    // Filter for todo 'Fry'
    cy.get('#todo-owner-input').type('Fry');

    page.getTodoListItems().each(e => {
      cy.wrap(e).find('.todo-list-owner').should('have.text', 'Fry');
    });
  });

  it('Should type something in the category filter and check that it returned correct elements', () => {
    // Filter for category 'homework'
    cy.get('#todo-category-input').type('homework');

    // All of the todo list items should have the category we are filtering by
    page.getTodoListItems().find('.todo-list-category').each($list => {
      cy.wrap($list).should('have.text', 'homework');
    });
  });

  it('Should type something partial in the key word filter and check that it returned correct elements', () => {
    // Filter by key word for body containing 'sunt'
    cy.get('#todo-keyWord-input').type('sunt');

    page.getTodoListItems().each(e => {
      cy.wrap(e).get('.todo-list-body').contains('sunt');
    });
  });

  it('Should select a status and check that it returned correct elements', () => {
    // Filter for status 'complete'
    page.selectStatus('complete');

    // Some of the todos should be listed
    page.getTodoListItems().should('exist');

    // All of the todo list items that show should have the status we are looking for
    page.getTodoListItems().each(e => {
      cy.wrap(e).find('.todo-list-status').should('have.text', 'true');
    });
  });

});
