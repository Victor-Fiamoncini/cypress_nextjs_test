import React from 'react'

import TodoList from '@/app/components/todo-list/TodoList'

describe('<TodoList />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/todos', []).as('getTodos')
    cy.intercept('POST', '/api/todos', { id: 1, text: 'Todo One' }).as('createTodo')
    cy.intercept('DELETE', '/api/todos', { ok: true }).as('deleteTodo')
  })

  it('renders', () => {
    cy.mount(<TodoList />)

    cy.contains(/to-do list/i)
    cy.get('[data-id="todo-list"]').children().should('have.length', 0)
    cy.contains(/todo one/i).should('not.exist')

    cy.get('input').type('Todo One')
    cy.get('button').click()
    cy.get('[data-id="todo-list"]').children().should('have.length', 1)
    cy.contains(/todo one/i)

    cy.get('[data-id="todo-1-remove-btn"]').click()
    cy.get('[data-id="todo-list"]').children().should('have.length', 0)
    cy.contains(/todo one/i).should('not.exist')
  })
})
