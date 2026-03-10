import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/tabs')({
  component: () => <SpecPage specId="tabs" />,
})
