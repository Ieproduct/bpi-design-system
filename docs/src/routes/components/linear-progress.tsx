import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/linear-progress')({
  component: () => <ComponentPage componentId="linearprogress" />,
})
