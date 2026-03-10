import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/form-field')({
  component: () => <SpecPage specId="form-field" />,
})
