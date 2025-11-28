import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react'

export const createApi = buildCreateApi(coreModule(), reactHooksModule({ unstable__sideEffectsInRender: true }))
