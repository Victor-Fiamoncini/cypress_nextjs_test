import { NextResponse } from 'next/server'

let todos = []
let nextId = 1

export async function GET() {
  return NextResponse.json(todos)
}

export async function POST(request) {
  const { text } = await request.json()

  const newTodo = { id: nextId++, text, done: false }

  todos.push(newTodo)

  return NextResponse.json(newTodo, { status: 201 })
}

export async function DELETE(request) {
  const { id } = await request.json()

  todos = todos.filter((todo) => todo.id !== id)

  return NextResponse.json({ ok: true })
}
