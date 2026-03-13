export function withBase(path: string): string {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const normalizedPath = path.replace(/^\//, "");

  return `${base}${normalizedPath}`;
}

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL;

  if (base !== "/" && pathname.startsWith(base)) {
    return `/${pathname.slice(base.length)}`.replace(/\/+/g, "/");
  }

  return pathname;
}

export function normalizePath(pathname: string): string {
  const stripped = stripBase(pathname);

  if (stripped === "/") {
    return "/";
  }

  return stripped.replace(/\/+$/, "");
}
