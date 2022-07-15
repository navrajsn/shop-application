import { render, screen } from '@testing-library/react'
import App from './App'
import Context from './components/context/Context'

test('renders App with context', () => {
  render(
    <Context>
      <App />
    </Context>,
  )
})
