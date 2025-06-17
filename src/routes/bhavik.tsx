import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bhavik')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bhavik"!</div>
}
