import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/dialog')({
  component: () => <SpecPage specId="dialog" />,
})
