'use client'

import { useState } from 'react'
import { Button } from './button'

// Callers should pass a `key` derived from the error content (e.g.
// `key={message + details}`) so React remounts this component - and its
// collapsed-by-default state - whenever the underlying error changes,
// rather than staying expanded across unrelated errors.
export function ErrorBanner({ message, details }: { message: string; details?: string | null }) {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!details) return
    try {
      await navigator.clipboard.writeText(details)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy error details', err)
    }
  }

  return (
    <div className="rounded-control border border-destructive/40 bg-transparent px-3 py-2 text-sm text-destructive">
      <div className="flex items-center justify-between gap-3">
        <span>{message}</span>
        {details && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="shrink-0 text-xs whitespace-nowrap underline underline-offset-2 hover:no-underline"
          >
            {expanded ? 'Hide details' : 'Show details'}
          </button>
        )}
      </div>
      {expanded && details && (
        <div className="mt-2 flex items-start gap-2">
          <pre className="max-h-48 flex-1 overflow-auto rounded bg-muted p-2 font-mono text-xs whitespace-pre-wrap select-all">
            {details}
          </pre>
          <Button type="button" variant="outline" size="sm" onClick={handleCopy} className="shrink-0">
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      )}
    </div>
  )
}
