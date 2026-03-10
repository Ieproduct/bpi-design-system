import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/form-field')({
  component: () => <ComponentPage componentId="form-field" />,
})
