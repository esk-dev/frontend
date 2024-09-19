export interface INavigationPaths {
  main: string;
  notes: string;
  tags: string;
  create_note: string;
}

export interface INavigationLink {
  label: string;
  params?: Record<string, unknown>;
  route: keyof INavigationPaths;
}
