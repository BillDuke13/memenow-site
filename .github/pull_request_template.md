<!--
Thanks for contributing to memenow-site.

Keep PRs focused. CI runs the same pre-push gate you should run locally:
`pnpm lint && pnpm check && pnpm test`. See docs/ci-cd.html for the full
pipeline overview.
-->

## Summary

<!-- What changed and why? Reference the route, component, or content area touched. -->

## Verification

- [ ] `pnpm lint` passes
- [ ] `pnpm check` passes
- [ ] `pnpm test` passes
- [ ] `pnpm preview` smoke-tested (only required for Worker, hooks, or binding changes)

## Content / Asset checklist

- [ ] Updated the matching `lastmod` entry in `src/lib/data/sitemap.ts` if user-visible content changed
- [ ] Re-ran `python3 scripts/build-brand-assets.py` if any master in `static/brand/originals/` changed
- [ ] No new license headers, AI co-author trailers, or generator attribution introduced
- [ ] No secrets committed (`.env`, `.dev.vars`, API tokens)

## Notes for reviewers

<!-- Anything reviewers should pay extra attention to: screenshots, perf trade-offs, follow-ups. -->
