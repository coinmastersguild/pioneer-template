"use client"

import * as React from "react"
import { PioneerProvider as PP } from "@coinmasters/pioneer-react"
export function PioneerProvider({ children }: { children: React.ReactNode }) {
    return <PP>{children}</PP>
}