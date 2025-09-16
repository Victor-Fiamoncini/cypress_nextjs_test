import React from 'react'

import TodoList from '@/app/components/todo-list/TodoList'

describe('<TodoList />', () => {
  it('renders', () => {
    cy.mount(<TodoList />)

    cy.contains(/to-do list/i)
    cy.get('[data-id="todo-list"]').children().should('have.length', 0)
    cy.contains(/todo one/i).should('not.exist')

    cy.get('input').type('Todo One')
    cy.get('button').click()
    cy.get('[data-id="todo-list"]').children().should('have.length', 1)
    cy.contains(/todo one/i)

    cy.get('[data-id="Todo One-remove-btn"]').click()
    cy.get('[data-id="todo-list"]').children().should('have.length', 0)
    cy.contains(/todo one/i).should('not.exist')
  })
})
