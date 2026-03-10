import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/card')({
  component: () => <ComponentPage componentId="card" />,
})
