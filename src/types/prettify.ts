// Helper to show all properties when some interfaces are nested
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {};