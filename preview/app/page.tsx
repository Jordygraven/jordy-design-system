"use client"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ErrorBanner,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  StatusDot,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "jordy-ui"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-semibold">Jordy UI preview</h1>

      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Glass surface used for every panel.</CardDescription>
        </CardHeader>
        <CardContent>Card body text.</CardContent>
      </Card>

      <section className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </section>

      <section className="flex flex-wrap items-center gap-3">
        <Badge>Badge</Badge>
        <Input placeholder="Type here" className="max-w-xs" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pick one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section className="flex gap-6">
        <StatusDot color="bg-income" label="On track" />
        <StatusDot color="bg-warning" label="Close to limit" />
        <StatusDot color="bg-danger" label="Over budget" />
      </section>

      <ErrorBanner message="Could not save" details="Try again in a minute." />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Rent</TableCell>
            <TableCell>1,200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
